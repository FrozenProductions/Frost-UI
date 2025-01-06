interface ButtonElement extends HTMLDivElement {
    setEnabled: (enabled: boolean) => void;
    isEnabled: () => boolean;
}

type ButtonVariant = "default" | "primary" | "destructive";
type ButtonCallback = () => void;

export type { ButtonElement, ButtonVariant, ButtonCallback };
