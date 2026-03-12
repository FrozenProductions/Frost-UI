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

type FrostTheme = 'dark' | 'midnight' | 'nord' | string;

export type { Position, DragOffset, FrostTheme, GridConfig };
