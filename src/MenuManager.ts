import FrostUI from "./Menu";
import { type Search, createToast } from "./components/index";
import type { CategoryData, ToastOptions, ToggleElement } from "./types/index";

class FrostManager {
    private menus: Map<string, FrostUI>;
    private keybinds: Map<string, string>;
    private globalKeybinds: Map<string, () => void>;
    private toastContainer: HTMLDivElement | null = null;
    private search: Search | null = null;

    constructor() {
        this.menus = new Map();
        this.keybinds = new Map();
        this.globalKeybinds = new Map();

        window.addEventListener(
            "keydown",
            (e: KeyboardEvent) => {
                if (document.activeElement?.tagName === "INPUT") return;
                if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;

                const bindingInput: HTMLInputElement | null = document.querySelector(".frost-keybind.binding");
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
    }

    public addMenu(id: string, title: string, position?: { x: number; y: number }, toggleKey = "ShiftRight"): FrostUI {
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
        if (!toggle || !("toggleState" in toggle)) return;

        const bindId = `${menuId}-${category}-${name}`;
        const oldKey: string | undefined = this.keybinds.get(bindId);

        if (oldKey) {
            this.globalKeybinds.delete(oldKey);
            this.keybinds.delete(bindId);
        }

        if (key && key !== "None") {
            this.keybinds.set(bindId, key);
            this.globalKeybinds.set(key, (toggle as { toggleState: () => void }).toggleState.bind(toggle));
        }
    }

    private initToastContainer(): void {
        if (!this.toastContainer) {
            this.toastContainer = document.createElement("div");
            this.toastContainer.className = "frost-toast-container";
            document.body.appendChild(this.toastContainer);
        }
    }

    public showToast(options: string | ToastOptions): void {
        this.initToastContainer();
        const toastOptions = typeof options === "string" ? { message: options } : options;
        const toast = createToast(toastOptions);
        this.toastContainer?.appendChild(toast);
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
                    type: "error",
                    duration: 3000,
                });
                return false;
            }
        }

        if (this.globalKeybinds.has(key)) {
            this.showToast({
                message: `Key "${key}" is already bound to another action`,
                type: "error",
                duration: 3000,
            });
            return false;
        }

        return true;
    }
}

export default FrostManager;
export const frostManager = new FrostManager();
