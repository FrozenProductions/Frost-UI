import FrostUI from "./Menu";
import { frostManager } from "./MenuManager";
import { createCategory } from "./components/Category";
import { createToggle } from "./components/Toggle";
import { createSlider } from "./components/Slider";
import { createKeybindInput } from "./components/KeybindInput";
import { createMultiSelect } from "./components/MultiSelect";
import { createPageSelector } from "./components/PageSelector";

declare global {
    interface Window {
        FrostUI: typeof FrostUI;
        frostManager: typeof frostManager;
    }
}

window.FrostUI = FrostUI;
window.frostManager = frostManager;

export {
    FrostUI,
    frostManager,
    createCategory,
    createToggle,
    createSlider,
    createKeybindInput,
    createMultiSelect,
    createPageSelector,
};

export default FrostUI;
