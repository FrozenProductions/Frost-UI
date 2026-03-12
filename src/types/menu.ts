interface Position {
    x: number;
    y: number;
}

interface DragOffset {
    x: number;
    y: number;
}

interface GridConfig {
    enabled: boolean;
    gridSize: number;
    showGrid: boolean;
}

const FrostThemes = {
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

type FrostTheme = typeof FrostThemes[keyof typeof FrostThemes] | string;

export type { Position, DragOffset, FrostTheme, GridConfig };
export { FrostThemes };
