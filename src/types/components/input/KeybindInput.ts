interface KeybindInputElement extends HTMLDivElement {
    getValue: () => string | null;
    setValue: (value: string | null) => void;
}

type KeybindCallback = (key: string | null) => void;

export type { KeybindCallback, KeybindInputElement };
