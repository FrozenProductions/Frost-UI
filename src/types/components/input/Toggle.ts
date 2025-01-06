interface ToggleElement extends HTMLDivElement {
    toggleState: () => void;
    getValue: () => boolean;
    setValue: (value: boolean) => void;
}

type ToggleCallback = (enabled: boolean, key: string) => void;

export type { ToggleElement, ToggleCallback };
