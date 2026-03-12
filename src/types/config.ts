interface FrostConfig {
    dimOnMenuOpen: boolean;
    blurOnMenuOpen: boolean;
    rememberPositions: boolean;
}

interface StoredMenuPositions {
    [menuId: string]: {
        x: number;
        y: number;
    };
}

const DEFAULT_FROST_CONFIG: FrostConfig = {
    dimOnMenuOpen: false,
    blurOnMenuOpen: false,
    rememberPositions: false,
};

const STORAGE_KEY_POSITIONS = 'frost-menu-positions';
const STORAGE_KEY_CONFIG = 'frost-config';

export type { FrostConfig, StoredMenuPositions };
export { DEFAULT_FROST_CONFIG, STORAGE_KEY_POSITIONS, STORAGE_KEY_CONFIG };
