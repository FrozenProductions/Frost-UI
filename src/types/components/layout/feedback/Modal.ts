interface ModalButton {
    text: string;
    variant?: 'default' | 'primary' | 'destructive';
    result?: string;
}

type ModalCloseMethod = 'button' | 'escape' | 'backdrop' | 'any';

interface ModalOptions {
    title: string;
    message: string;
    buttons?: ModalButton[];
    closeOn?: ModalCloseMethod[];
    dim?: boolean;
    blur?: boolean;
    theme?: 'dark' | 'midnight' | 'nord' | string;
}

interface ModalElement extends HTMLDivElement {
    close: (result?: string) => void;
}

type ModalResult = string | null;

export type { ModalButton, ModalCloseMethod, ModalOptions, ModalElement, ModalResult };
