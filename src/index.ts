import FrostUI from "./Menu";
import { frostManager } from "./MenuManager";
import { Search } from "./components/index";
import "./index.css";

declare global {
    interface Window {
        FrostUI: typeof FrostUI;
        frostManager: typeof frostManager;
        FrostSearch: typeof Search;
    }
}

window.FrostUI = FrostUI;
window.frostManager = frostManager;
window.FrostSearch = Search;

export { FrostUI, frostManager, Search };

export default FrostUI;
