interface PageSelectorElement extends HTMLDivElement {
    getValue: () => number;
    setValue: (value: number) => void;
}

type PageCallback = (value: string, index: number) => void;

export type { PageSelectorElement, PageCallback };
