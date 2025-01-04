interface DualSliderElement extends HTMLDivElement {
    getValue: () => { start: number; end: number };
    setValue: (values: { start: number; end: number }) => void;
}

type DualSliderCallback = (values: { start: number; end: number }) => void;

interface DualSliderOptions {
    name: string;
    min: number;
    max: number;
    defaultStart: number;
    defaultEnd: number;
    step?: number;
    callback?: DualSliderCallback;
}

function createDualSlider({
    name,
    min,
    max,
    defaultStart,
    defaultEnd,
    step = 1,
    callback,
}: DualSliderOptions): DualSliderElement {
    const container = document.createElement("div") as DualSliderElement;
    container.className = "frost-dual-slider";

    const label: HTMLSpanElement = document.createElement("span");
    label.textContent = name;

    const controls: HTMLDivElement = document.createElement("div");
    controls.className = "frost-dual-slider-controls";

    const sliderContainer: HTMLDivElement = document.createElement("div");
    sliderContainer.className = "frost-dual-slider-container";

    const track: HTMLDivElement = document.createElement("div");
    track.className = "frost-dual-slider-track";

    const range: HTMLDivElement = document.createElement("div");
    range.className = "frost-dual-slider-range";

    const startInput: HTMLInputElement = document.createElement("input");
    startInput.type = "range";
    startInput.min = min.toString();
    startInput.max = max.toString();
    startInput.value = defaultStart.toString();
    startInput.step = step.toString();
    startInput.className = "frost-dual-slider-start";

    const endInput: HTMLInputElement = document.createElement("input");
    endInput.type = "range";
    endInput.min = min.toString();
    endInput.max = max.toString();
    endInput.value = defaultEnd.toString();
    endInput.step = step.toString();
    endInput.className = "frost-dual-slider-end";

    const startValue: HTMLInputElement = document.createElement("input");
    startValue.type = "text";
    startValue.className = "frost-dual-slider-value";
    startValue.value = defaultStart.toString();

    const endValue: HTMLInputElement = document.createElement("input");
    endValue.type = "text";
    endValue.className = "frost-dual-slider-value";
    endValue.value = defaultEnd.toString();

    const updateRange = () => {
        const start = Number(startInput.value);
        const end = Number(endInput.value);
        const percent1 = ((start - min) / (max - min)) * 100;
        const percent2 = ((end - min) / (max - min)) * 100;
        range.style.left = `${percent1}%`;
        range.style.width = `${percent2 - percent1}%`;
    };

    const updateValues = (start: number, end: number) => {
        const clampedStart = Math.min(Math.max(start, min), end);
        const clampedEnd = Math.min(Math.max(end, start), max);

        startInput.value = clampedStart.toString();
        endInput.value = clampedEnd.toString();
        startValue.value = clampedStart.toString();
        endValue.value = clampedEnd.toString();

        updateRange();
        if (callback) callback({ start: clampedStart, end: clampedEnd });
    };

    startInput.addEventListener("input", () => {
        updateValues(Number(startInput.value), Number(endInput.value));
    });

    endInput.addEventListener("input", () => {
        updateValues(Number(startInput.value), Number(endInput.value));
    });

    startValue.addEventListener("change", () => {
        const newValue = Number.parseFloat(startValue.value);
        if (Number.isNaN(newValue)) {
            startValue.classList.add("invalid");
            setTimeout(() => startValue.classList.remove("invalid"), 400);
            startValue.value = startInput.value;
            return;
        }
        updateValues(newValue, Number(endInput.value));
    });

    endValue.addEventListener("change", () => {
        const newValue = Number.parseFloat(endValue.value);
        if (Number.isNaN(newValue)) {
            endValue.classList.add("invalid");
            setTimeout(() => endValue.classList.remove("invalid"), 400);
            endValue.value = endInput.value;
            return;
        }
        updateValues(Number(startInput.value), newValue);
    });

    startValue.addEventListener("focus", () => startValue.select());
    endValue.addEventListener("focus", () => endValue.select());

    sliderContainer.appendChild(track);
    sliderContainer.appendChild(range);
    sliderContainer.appendChild(startInput);
    sliderContainer.appendChild(endInput);

    controls.appendChild(sliderContainer);
    controls.appendChild(startValue);
    controls.appendChild(endValue);

    container.appendChild(label);
    container.appendChild(controls);

    updateRange();

    container.getValue = () => ({
        start: Number(startInput.value),
        end: Number(endInput.value),
    });

    container.setValue = (values: { start: number; end: number }) => {
        updateValues(values.start, values.end);
    };

    return container;
}

export { createDualSlider, type DualSliderElement, type DualSliderOptions };
