import type { ChartElement, ChartOptions } from "../../../types/index";

function createChart({
    name,
    width = 260,
    height = 150,
    maxDataPoints = 100,
    series,
    minY = undefined,
    maxY = undefined,
}: ChartOptions): ChartElement {
    series = series.map((s: { label: string; color: string; data: number[] }) => ({
        ...s,
        data: s.data?.length === maxDataPoints ? s.data : Array(maxDataPoints).fill(0),
    }));

    const container = document.createElement("div") as ChartElement;
    container.className = "frost-chart";

    const title: HTMLSpanElement = document.createElement("span");
    title.className = "frost-chart-title";
    title.textContent = name;

    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

    if (!ctx) return container;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const tooltip: HTMLDivElement = document.createElement("div");
    tooltip.className = "frost-chart-tooltip";
    document.body.appendChild(tooltip);

    let hoverIndex = -1;
    let animationFrame: number;
    const currentData: { label: string; color: string; data: number[] }[] = series.map((s) => ({
        ...s,
        data: Array(maxDataPoints).fill(0),
    }));

    function drawChart() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        const padding: number = 20;
        const chartWidth: number = width - padding * 2;
        const chartHeight: number = height - padding * 2;

        let yMin: number = minY ?? Math.min(...currentData.flatMap((s: { data: number[] }) => s.data));
        let yMax: number = maxY ?? Math.max(...currentData.flatMap((s: { data: number[] }) => s.data));
        const yRange: number = yMax - yMin;
        yMin -= yRange * 0.1;
        yMax += yRange * 0.1;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;

        for (let i = 0; i <= 4; i++) {
            const y: number = padding + (chartHeight * i) / 4;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();
        }

        for (const series of currentData) {
            ctx.strokeStyle = series.color;
            ctx.lineWidth = 2;
            ctx.beginPath();

            for (let i = 0; i < series.data.length; i++) {
                const value: number = series.data[i];
                const x: number = padding + (i * chartWidth) / (maxDataPoints - 1);
                const y: number = padding + chartHeight - ((value - yMin) / (yMax - yMin)) * chartHeight;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            ctx.stroke();

            if (hoverIndex >= 0) {
                const x: number = padding + (hoverIndex * chartWidth) / (maxDataPoints - 1);
                const y: number =
                    padding + chartHeight - ((series.data[hoverIndex] - yMin) / (yMax - yMin)) * chartHeight;

                ctx.fillStyle = series.color;
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    function animateChart(targetData: typeof series) {
        const animationSpeed = 0.15;
        let needsUpdate = false;

        for (let i = 0; i < currentData.length; i++) {
            const s = currentData[i];
            const target = targetData[i].data;

            s.data = s.data.map((value, j) => {
                const diff = target[j] - value;
                if (Math.abs(diff) > 0.001) {
                    needsUpdate = true;
                    return value + diff * animationSpeed;
                }
                return target[j];
            });
        }

        if (needsUpdate) {
            drawChart();
            animationFrame = requestAnimationFrame(() => animateChart(targetData));
        } else {
            for (let i = 0; i < currentData.length; i++) {
                currentData[i].data = [...targetData[i].data];
            }
            drawChart();
        }
    }

    canvas.addEventListener("mousemove", (e) => {
        const rect: DOMRect = canvas.getBoundingClientRect();
        const scaleX: number = canvas.width / rect.width;
        const x: number = (e.clientX - rect.left) * scaleX;
        const padding: number = 20;
        const chartWidth: number = width - padding * 2;

        const adjustedX: number = x - padding;

        if (adjustedX >= -padding / 2 && adjustedX <= chartWidth + padding / 2) {
            const clampedX: number = Math.max(0, Math.min(adjustedX, chartWidth));
            const index: number = Math.round((clampedX / chartWidth) * (maxDataPoints - 1));
            hoverIndex = Math.min(Math.max(index, 0), maxDataPoints - 1);

            tooltip.style.display = "block";
            tooltip.style.left = `${e.pageX}px`;
            tooltip.style.top = `${e.pageY}px`;
            tooltip.classList.add("show");

            tooltip.innerHTML = currentData
                .map(
                    (s: { label: string; color: string; data: number[] }) => `
                    <div class="frost-chart-tooltip-row">
                        <span style="color: ${s.color}">${s.label}:</span>
                        <span>${s.data[hoverIndex]?.toFixed(2) || "N/A"}</span>
                    </div>
                `
                )
                .join("");

            drawChart();
        } else {
            hoverIndex = -1;
            tooltip.classList.remove("show");
            drawChart();
        }
    });

    canvas.addEventListener("mouseleave", () => {
        hoverIndex = -1;
        tooltip.classList.remove("show");
        drawChart();
    });

    container.addDataPoint = (seriesIndex: number, value: number) => {
        if (seriesIndex >= 0 && seriesIndex < series.length) {
            const newData = [...series[seriesIndex].data.slice(1), value];
            series[seriesIndex].data = newData;

            cancelAnimationFrame(animationFrame);

            animateChart(series);
        }
    };

    container.clearData = () => {
        for (const s of series) {
            s.data = Array(maxDataPoints).fill(0);
        }
        animateChart(series);
    };

    container.getValue = () => {
        return series.reduce((acc, s) => {
            acc[s.label] = s.data;
            return acc;
        }, {} as { [key: string]: number[] });
    };

    container.appendChild(title);
    container.appendChild(canvas);
    drawChart();

    return container;
}

export { createChart };
