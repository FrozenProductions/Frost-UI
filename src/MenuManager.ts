import { CategoryData } from './components/Category';
import { FCPMenu } from './Menu';

export class MenuManager {
    private menus: Map<string, FCPMenu>;
    private keybinds: Map<string, string>;
    private globalKeybinds: Map<string, () => void>;

    constructor() {
        this.menus = new Map();
        this.keybinds = new Map();
        this.globalKeybinds = new Map();
        
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            if (document.activeElement?.tagName === 'INPUT') return;
            const action: (() => void) | undefined = this.globalKeybinds.get(e.code);
            if (action) {
                e.preventDefault();
                action();
            }
        });
    }
    
    public addMenu(
        id: string, 
        title: string, 
        position?: { x: number; y: number }, 
        toggleKey: string = 'ShiftRight'
    ): FCPMenu {
        const menu = new FCPMenu(id, title, position, toggleKey);
        this.menus.set(id, menu);
        return menu;
    }
    
    public updateMenuToggleKey(menuId: string, key: string): void {
        const menu: FCPMenu | undefined = this.menus.get(menuId);
        if (menu) {
            menu.setToggleKey(key);
        }
    }

    public updateKeybind(menuId: string, category: string, name: string, key: string): void {
        const menu: FCPMenu | undefined = this.menus.get(menuId);
        if (!menu) return;

        const categoryData: CategoryData | undefined = menu.getCategories().get(category);
        if (!categoryData) return;

        const toggle: HTMLElement | undefined = categoryData.items.get(name);
        if (!toggle || !('toggleState' in toggle)) return;

        const bindId = `${menuId}-${category}-${name}`;
        const oldKey: string | undefined = this.keybinds.get(bindId);
        
        if (oldKey === key) return;

        if (oldKey) {
            this.globalKeybinds.delete(oldKey);
            this.keybinds.delete(bindId);
        }

        if (key && key !== 'None') {
            this.keybinds.set(bindId, key);
            this.globalKeybinds.set(key, () => {
                (toggle as { toggleState: () => void }).toggleState();
            });
        }
    }
}

export const fcpManager = new MenuManager(); 