interface ColorInputElement extends HTMLDivElement {
    getValue: () => string;
    setValue: (value: string) => void;
}

type ColorCallback = (color: string) => void;

export type { ColorInputElement, ColorCallback };
