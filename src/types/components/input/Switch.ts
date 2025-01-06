interface SwitchElement extends HTMLDivElement {
    getValue: () => boolean;
    setValue: (value: boolean) => void;
}

type SwitchVariant = "default" | "slim" | "pill" | "ios";
type SwitchCallback = (enabled: boolean) => void;

export type { SwitchElement, SwitchVariant, SwitchCallback };
