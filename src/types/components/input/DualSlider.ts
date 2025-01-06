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

export type { DualSliderElement, DualSliderOptions, DualSliderCallback };
