interface Position {
    x: number;
    y: number;
}

interface DragOffset {
    x: number;
    y: number;
}

type FrostTheme = "dark" | "midnight" | "nord" | string;

export type { Position, DragOffset, FrostTheme };
