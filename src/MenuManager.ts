import FrostUI from './Menu';
import { type Search, createModal, createToast } from './components/index';
import { DEFAULT_FROST_CONFIG, STORAGE_KEY_CONFIG } from './types/config';
import type {
    CategoryData,
    FrostConfig,
    GridConfig,
    ModalOptions,
    ModalResult,
    ToastOptions,
    ToggleElement,
} from './types/index';

class FrostManagerConstants {
    static readonly themes = {
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

    static readonly buttonVariant = {
        DEFAULT: 'default',
        PRIMARY: 'primary',
        DESTRUCTIVE: 'destructive',
    } as const;

    static readonly toastType = {
        SUCCESS: 'success',
        ERROR: 'error',
        INFO: 'info',
        WARNING: 'warning',
    } as const;
}

class FrostManagerModalConstants {
    static readonly closeOn = {
        BUTTON: 'button',
        ESCAPE: 'escape',
        BACKDROP: 'backdrop',
        ANY: 'any',
    } as const;
}

class FrostManager {
    private menus: Map<string, FrostUI>;
    private keybinds: Map<string, string>;
    private globalKeybinds: Map<string, () => void>;
    private toastContainer: HTMLDivElement | null = null;
    private modalContainer: HTMLDivElement | null = null;
    private search: Search | null = null;
    private backdrop: HTMLDivElement | null = null;
    private openMenuCount = 0;
    private config: FrostConfig;

    static readonly modal = FrostManagerModalConstants;

    readonly themes = FrostManagerConstants.themes;
    readonly buttonVariant = FrostManagerConstants.buttonVariant;
    readonly toastType = FrostManagerConstants.toastType;
    readonly modal = FrostManagerModalConstants;

    constructor() {
        this.menus = new Map();
        this.keybinds = new Map();
        this.globalKeybinds = new Map();
        this.config = this.loadConfig();

        window.addEventListener(
            'keydown',
            (e: KeyboardEvent) => {
                if (document.activeElement?.tagName === 'INPUT') return;
                if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;

                const bindingInput: HTMLInputElement | null =
                    document.querySelector('.frost-keybind.binding');
                if (bindingInput) return;

                const action: (() => void) | undefined = this.globalKeybinds.get(e.code);
                if (action) {
                    e.preventDefault();
                    e.stopPropagation();
                    action();
                }
            },
            true
        );

        this.setupBackdropListeners();
    }

    private loadConfig(): FrostConfig {
        try {
            const stored = localStorage.getItem(STORAGE_KEY_CONFIG);
            if (stored) {
                return { ...DEFAULT_FROST_CONFIG, ...JSON.parse(stored) };
            }
        } catch {
            // Ignore
        }
        return { ...DEFAULT_FROST_CONFIG };
    }

    private saveConfig(): void {
        try {
            localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(this.config));
        } catch {
            // Ignore
        }
    }

    public setConfig(partialConfig: Partial<FrostConfig>): void {
        this.config = { ...this.config, ...partialConfig };
        this.saveConfig();
    }

    public getConfig(): FrostConfig {
        return { ...this.config };
    }

    private initBackdrop(): void {
        if (!this.backdrop) {
            this.backdrop = document.createElement('div');
            this.backdrop.className = 'frost-backdrop';
            document.body.appendChild(this.backdrop);
        }
    }

    private setupBackdropListeners(): void {
        document.addEventListener('frost-menu-open', () => {
            this.openMenuCount++;
            this.updateBackdrop();
        });

        document.addEventListener('frost-menu-close', () => {
            this.openMenuCount = Math.max(0, this.openMenuCount - 1);
            this.updateBackdrop();
        });
    }

    private updateBackdrop(): void {
        if (this.openMenuCount > 0 && (this.config.dimOnMenuOpen || this.config.blurOnMenuOpen)) {
            this.initBackdrop();
            if (this.backdrop) {
                this.backdrop.classList.remove('dim', 'blur');
                if (this.config.dimOnMenuOpen) {
                    this.backdrop.classList.add('dim');
                }
                if (this.config.blurOnMenuOpen) {
                    this.backdrop.classList.add('blur');
                }
                this.backdrop.classList.add('visible');
            }
        } else {
            if (this.backdrop) {
                this.backdrop.classList.remove('visible');
            }
        }
    }

    public addMenu(
        id: string,
        title: string,
        position?: { x: number; y: number },
        toggleKey = 'ShiftRight',
        gridConfig?: GridConfig
    ): FrostUI {
        const menu = new FrostUI(id, title, position, toggleKey, gridConfig);
        this.menus.set(id, menu);
        return menu;
    }

    public updateMenuToggleKey(menuId: string, key: string): void {
        const menu: FrostUI | undefined = this.menus.get(menuId);
        if (menu) {
            menu.setToggleKey(key);
        }
    }

    public updateKeybind(menuId: string, category: string, name: string, key: string): void {
        const menu: FrostUI | undefined = this.menus.get(menuId);
        if (!menu) return;

        const categoryData: CategoryData | undefined = menu.getCategories().get(category);
        if (!categoryData) return;

        const toggle: ToggleElement | undefined = categoryData.items.get(name) as ToggleElement;
        if (!toggle || !('toggleState' in toggle)) return;

        const bindId = `${menuId}-${category}-${name}`;
        const oldKey: string | undefined = this.keybinds.get(bindId);

        if (oldKey) {
            this.globalKeybinds.delete(oldKey);
            this.keybinds.delete(bindId);
        }

        if (key && key !== 'None') {
            this.keybinds.set(bindId, key);
            this.globalKeybinds.set(
                key,
                (toggle as { toggleState: () => void }).toggleState.bind(toggle)
            );
        }
    }

    private initToastContainer(): void {
        if (!this.toastContainer) {
            this.toastContainer = document.createElement('div');
            this.toastContainer.className = 'frost-toast-container';
            document.body.appendChild(this.toastContainer);
        }
    }

    public showToast(options: string | ToastOptions): void {
        this.initToastContainer();
        const toastOptions = typeof options === 'string' ? { message: options } : options;
        const toast = createToast(toastOptions);
        this.toastContainer?.appendChild(toast);
    }

    private initModalContainer(): void {
        if (!this.modalContainer) {
            this.modalContainer = document.createElement('div');
            this.modalContainer.className = 'frost-modal-container';
            document.body.appendChild(this.modalContainer);
        }
    }

    public showModal(options: ModalOptions): Promise<ModalResult> {
        this.initModalContainer();
        const modal = createModal(options);

        let themeClass: string | null = null;

        if (options.theme) {
            themeClass = options.theme === 'dark' ? null : `frost-theme-${options.theme}`;
        } else {
            const menuContainer = document.querySelector('.frost-menu');
            if (menuContainer) {
                themeClass = Array.from(menuContainer.classList).find((c: string) =>
                    c.startsWith('frost-theme-')
                ) as string | null;
            }
        }

        if (themeClass) {
            modal.classList.add(themeClass);
        }

        this.modalContainer?.appendChild(modal);
        return (modal as any).promise;
    }

    public getMenus(): Map<string, FrostUI> {
        return this.menus;
    }

    public getSearch(): Search | null {
        return this.search;
    }

    public setSearch(search: Search): void {
        this.search = search;
    }

    public hasKeybind(key: string): boolean {
        return this.globalKeybinds.has(key);
    }

    public tryBindKey(currentMenuId: string, key: string): boolean {
        for (const [id, menu] of this.menus) {
            if (id !== currentMenuId && menu.getToggleKey() === key) {
                this.showToast({
                    message: `Key "${key}" is already used to toggle menu "${menu.getTitle()}"`,
                    type: 'error',
                    duration: 3000,
                });
                return false;
            }
        }

        if (this.globalKeybinds.has(key)) {
            this.showToast({
                message: `Key "${key}" is already bound to another action`,
                type: 'error',
                duration: 3000,
            });
            return false;
        }

        return true;
    }
}

export default FrostManager;
export const frostManager = new FrostManager();
