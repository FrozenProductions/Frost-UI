import { FCPMenu } from './Menu';
import { fcpManager } from './MenuManager';
import { createCategory } from './components/Category';
import { createToggle } from './components/Toggle';
import { createSlider } from './components/Slider';
import { createKeybindInput } from './components/KeybindInput';
import { createMultiSelect } from './components/MultiSelect';
import { createPageSelector } from './components/PageSelector';

declare global {
    interface Window {
        FCPMenu: typeof FCPMenu;
        fcpManager: typeof fcpManager;
    }
}

window.FCPMenu = FCPMenu;
window.fcpManager = fcpManager;

export { 
    FCPMenu, 
    fcpManager,
    createCategory,
    createToggle,
    createSlider,
    createKeybindInput,
    createMultiSelect,
    createPageSelector
};

export default FCPMenu; 