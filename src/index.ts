import FrostUI from './Menu';
import { frostManager } from './MenuManager';
import { createCategory } from './components/Category';
import { createKeybindInput } from './components/KeybindInput';
import { createMultiSelect } from './components/MultiSelect';
import { createOrderList } from './components/OrderList';
import { createPageSelector } from './components/PageSelector';
import { createSlider } from './components/Slider';
import { createToggle } from './components/Toggle';

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
    createOrderList,
};

export default FrostUI;
