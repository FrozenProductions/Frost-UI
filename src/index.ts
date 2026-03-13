import FrostUI from './Menu';
import { frostManager } from './MenuManager';
import { Search } from './components/index';
import './index.css';

declare global {
    interface Window {
        FrostUI: typeof FrostUI;
        frostManager: typeof frostManager;
        frostSearch: typeof Search;
    }
}

window.FrostUI = FrostUI;
window.frostManager = frostManager;
window.frostSearch = Search;

export { FrostUI, frostManager, Search };

export default FrostUI;
