interface ChartOptions {
    name: string;
    width?: number;
    height?: number;
    maxDataPoints?: number;
    series: {
        label: string;
        color: string;
        data: number[];
    }[];
    minY?: number;
    maxY?: number;
    showLegend?: boolean;
}

interface ChartElement extends HTMLDivElement {
    addDataPoint: (seriesIndex: number, value: number) => void;
    clearData: () => void;
    getValue: () => { [key: string]: number[] };
}

export type { ChartOptions, ChartElement };
