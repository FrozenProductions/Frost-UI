interface RadioGroupElement extends HTMLDivElement {
    getValue: () => string;
    setValue: (value: string) => void;
}

type RadioCallback = (value: string) => void;

export type { RadioCallback, RadioGroupElement };
