import type { FrostUI, Search } from "../..";
import type { KeybindCallback, KeybindInputElement } from "../../types/index";

function createKeybindInput(currentKey?: string, callback?: KeybindCallback, menuId?: string): KeybindInputElement {
    const keybindInput = document.createElement("div") as KeybindInputElement;
    keybindInput.className = "frost-keybind";

    const keyDisplay: HTMLSpanElement = document.createElement("span");
    keyDisplay.className = "frost-keybind-display";
    keyDisplay.textContent = currentKey || "None";

    const clearButton: HTMLButtonElement = document.createElement("button");
    clearButton.className = "frost-keybind-clear";
    clearButton.textContent = "×";
    clearButton.style.display = currentKey ? "block" : "none";

    keybindInput.appendChild(keyDisplay);
    keybindInput.appendChild(clearButton);

    let isBinding = false;

    const checkKeyConflicts = (key: string): boolean => {
        const menus: Map<string, FrostUI> = window.frostManager?.getMenus() || new Map();
        for (const [id, menu] of menus) {
            if (id !== menuId && menu.getToggleKey() === key) {
                return true;
            }
        }

        if (window.frostManager?.hasKeybind(key)) {
            return true;
        }

        return false;
    };

    keybindInput.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === clearButton) {
            keyDisplay.textContent = "None";
            clearButton.style.display = "none";
            if (callback) callback(null);
            return;
        }

        if (!isBinding) {
            isBinding = true;
            keyDisplay.textContent = "Press key...";
            keybindInput.classList.add("binding");
        }
    });

    document.addEventListener(
        "keydown",
        (e: KeyboardEvent) => {
            if (!isBinding) return;

            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
                keyDisplay.textContent = currentKey || "None";
                clearButton.style.display = currentKey ? "block" : "none";
                isBinding = false;
                keybindInput.classList.remove("binding");
                return;
            }

            const key: string = e.code;
            const hasConflict = checkKeyConflicts(key);

            if (hasConflict) {
                keyDisplay.textContent = currentKey || "None";
                clearButton.style.display = currentKey ? "block" : "none";
            } else {
                keyDisplay.textContent = key;
                clearButton.style.display = "block";
                if (callback) callback(key);
            }

            isBinding = false;
            keybindInput.classList.remove("binding");
        },
        true
    );

    keybindInput.getValue = () => (keyDisplay.textContent === "None" ? null : keyDisplay.textContent);
    keybindInput.setValue = (value: string | null) => {
        keyDisplay.textContent = value || "None";
        clearButton.style.display = value ? "block" : "none";
        if (callback) callback(value);
    };

    return keybindInput;
}

export { createKeybindInput };
