interface ToastOptions {
    message: string;
    type?: "success" | "error" | "info" | "warning";
    duration?: number;
    variant?: "default" | "action";
    action?: {
        text: string;
        onClick: () => void;
        type?: "primary" | "destructive";
    };
}

interface ToastElement extends HTMLDivElement {
    close: () => void;
}

export type { ToastOptions, ToastElement };
