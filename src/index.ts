import FrostUI from "./Menu";
import { frostManager } from "./MenuManager";

declare global {
    interface Window {
        FrostUI: typeof FrostUI;
        frostManager: typeof frostManager;
    }
}

window.FrostUI = FrostUI;
window.frostManager = frostManager;

export { FrostUI, frostManager };

export default FrostUI;
