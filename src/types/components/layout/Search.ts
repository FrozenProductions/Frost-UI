import type Menu from '../../../Menu';
import type { CategoryData } from './Category';

interface SearchResult {
    text: string;
    path: string[];
    element: HTMLElement;
    type: 'category' | 'item';
    componentType?: 'toggle' | 'switch' | 'slider' | 'dualSlider' | 'radioGroup' | 'select' | 'colorInput' | 'multiSelect' | 'pageSelector' | 'button' | 'orderList' | 'chart' | 'gridSelector';
    category?: CategoryData;
    menu: Menu;
    menuName: string;
}

export type { SearchResult };
