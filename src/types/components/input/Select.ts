interface SelectElement extends HTMLDivElement {
    getValue: () => string;
    setValue: (value: string) => void;
}

type SelectCallback = (value: string) => void;

export type { SelectElement, SelectCallback };
