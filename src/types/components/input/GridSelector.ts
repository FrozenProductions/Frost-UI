interface GridSelectorElement extends HTMLDivElement {
    getValue: () => string[];
    setValue: (values: string[]) => void;
}

interface GridItem {
    id: string;
    icon?: string;
    label: string;
}

type GridSelectorCallback = (selected: string[]) => void;

export type { GridSelectorElement, GridItem, GridSelectorCallback };
