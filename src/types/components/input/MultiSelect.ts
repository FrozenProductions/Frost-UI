interface MultiSelectElement extends HTMLDivElement {
    getValue: () => string[];
    setValue: (values: string[]) => void;
}

type MultiSelectCallback = (selected: string[]) => void;

export type { MultiSelectElement, MultiSelectCallback };
