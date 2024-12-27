import { CategoryData } from './components/Category';
import { ToggleElement } from './components/Toggle';
import FrostUI from './Menu';
import { createToast, ToastOptions } from './components/Toast';

class FrostManager {
    private menus: Map<string, FrostUI>;
    private keybinds: Map<string, string>;
    private globalKeybinds: Map<string, () => void>;
    private toastContainer: HTMLDivElement | null = null;

    constructor() {
        this.menus = new Map();
        this.keybinds = new Map();
        this.globalKeybinds = new Map();
        
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if (document.activeElement?.tagName === 'INPUT') return;
            const action: (() => void) | undefined = this.globalKeybinds.get(e.code);
            if (action) {
                e.preventDefault();
                e.stopPropagation();
                action();
            }
        }, true);
    }
    
    public addMenu(
        id: string, 
        title: string, 
        position?: { x: number; y: number }, 
        toggleKey: string = 'ShiftRight'
    ): FrostUI {
        const menu = new FrostUI(id, title, position, toggleKey);
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
            this.globalKeybinds.set(key, (toggle as { toggleState: () => void }).toggleState.bind(toggle));
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
}

export default FrostManager;
export const frostManager = new FrostManager(); 