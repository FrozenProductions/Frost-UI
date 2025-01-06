interface SliderElement extends HTMLDivElement {
    getValue: () => number;
    setValue: (value: number) => void;
}

type SliderCallback = (value: number) => void;

interface SliderOptions {
    name: string;
    min: number;
    max: number;
    defaultValue: number;
    step?: number;
    callback?: SliderCallback;
}

export type { SliderElement, SliderCallback, SliderOptions };
