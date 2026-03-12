export const themes = {
    DARK: 'dark',
    MIDNIGHT: 'midnight',
    NORD: 'nord',
    DEEP: 'deep',
    OBSIDIAN: 'obsidian',
    DUSK: 'dusk',
    CATPPUCCIN_MACCHIATO: 'catppuccin-macchiato',
    CATPPUCCIN_LATTE: 'catppuccin-latte',
    DRACULA: 'dracula',
    GRUVBOX: 'gruvbox',
    TOKYO_NIGHT: 'tokyo-night',
} as const;

export const buttonVariant = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    DESTRUCTIVE: 'destructive',
} as const;

export const toastType = {
    SUCCESS: 'success',
    ERROR: 'error',
    INFO: 'info',
    WARNING: 'warning',
} as const;

export const modalCloseOn = {
    BUTTON: 'button',
    ESCAPE: 'escape',
    BACKDROP: 'backdrop',
    ANY: 'any',
} as const;
