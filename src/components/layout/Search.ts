import Menu from '../../Menu';
import icons from '../../icons';
import type { CategoryData, FrostTheme, SearchResult } from '../../types/index';

export class Search {
    private container: HTMLDivElement = document.createElement('div');
    private searchWrapper: HTMLDivElement = document.createElement('div');
    private searchInput: HTMLInputElement = document.createElement('input');
    private shortcutHint: HTMLDivElement = document.createElement('div');
    private resultsContainer: HTMLDivElement = document.createElement('div');
    private isVisible = false;
    private menus: Map<string, Menu> = new Map();
    private searchResults: HTMLDivElement[] = [];
    private selectedIndex = -1;
    private activeElements: Set<HTMLElement> = new Set();
    private currentTheme: FrostTheme = 'dark';
    private keybind = 'k';

    constructor(menuOrMenus: Menu | { [key: string]: Menu }, keybind = 'k') {
        this.keybind = keybind.toLowerCase();
        if (menuOrMenus instanceof Menu) {
            this.menus.set('Default', menuOrMenus);
            this.setTheme(this.getThemeFromMenu(menuOrMenus));
        } else {
            for (const [name, menu] of Object.entries(menuOrMenus)) {
                this.menus.set(name, menu);
            }
            const firstMenu: Menu = Object.values(menuOrMenus)[0];
            if (firstMenu) {
                this.setTheme(this.getThemeFromMenu(firstMenu));
            }
        }
        this.createSearchUI();
        this.setupEventListeners();
        if (window.frostManager) {
            window.frostManager.setSearch(this);
        }
    }

    public setKeybind(key: string): void {
        this.keybind = key.toLowerCase();
        this.updateShortcutHint();
    }

    public getKeybind(): string {
        return this.keybind;
    }

    private updateShortcutHint(): void {
        const isMacOS: boolean = isMac();
        const modKey: string = isMacOS ? '⌘' : 'Ctrl';
        const key: string = this.keybind.length === 1 ? this.keybind.toUpperCase() : this.keybind;
        this.shortcutHint.textContent = `${modKey}+${key}`;
    }

    private getThemeFromMenu(menu: Menu): FrostTheme {
        const menuContainer: HTMLElement = menu.getContainer();
        const themeClass: string | undefined = Array.from(menuContainer.classList).find(
            (className) => className.startsWith('frost-theme-')
        );
        return themeClass ? (themeClass.replace('frost-theme-', '') as FrostTheme) : 'dark';
    }

    public setTheme(theme: FrostTheme): void {
        const themeClasses: string[] = Array.from(this.container.classList).filter(
            (className: string) => className.startsWith('frost-theme-')
        );
        for (const className of themeClasses) {
            this.container.classList.remove(className);
        }

        if (theme !== 'dark') {
            this.container.classList.add(`frost-theme-${theme}`);
        }
        this.currentTheme = theme;
    }

    public getTheme(): FrostTheme {
        return this.currentTheme;
    }

    private createSearchUI() {
        this.container.className = 'frost-search-container';
        if (this.currentTheme !== 'dark') {
            this.container.classList.add(`frost-theme-${this.currentTheme}`);
        }

        this.searchWrapper.className = 'frost-search-input-wrapper';

        this.searchInput.type = 'text';
        this.searchInput.className = 'frost-search-input';
        this.searchInput.placeholder = 'Search menu...';

        this.shortcutHint.className = 'frost-search-shortcut';
        this.updateShortcutHint();

        this.resultsContainer.className = 'frost-search-results';

        this.searchWrapper.appendChild(this.searchInput);
        this.searchWrapper.appendChild(this.shortcutHint);

        this.container.appendChild(this.searchWrapper);
        this.container.appendChild(this.resultsContainer);
        document.body.appendChild(this.container);
    }

    private setupEventListeners() {
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === this.keybind) {
                e.preventDefault();
                this.toggle();
            }
            if (this.isVisible) {
                switch (e.key) {
                    case 'Escape':
                        this.hide();
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        this.selectNext();
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        this.selectPrevious();
                        break;
                    case 'Enter':
                        e.preventDefault();
                        this.selectCurrent();
                        break;
                }
            }
        });

        this.searchInput.addEventListener('input', () => {
            this.performSearch();
        });

        document.addEventListener('click', (e: MouseEvent) => {
            if (this.isVisible && !this.container.contains(e.target as Node)) {
                this.hide();
            }
        });
    }

    private selectNext() {
        if (this.searchResults.length === 0) return;
        this.selectedIndex = (this.selectedIndex + 1) % this.searchResults.length;
        this.updateSelection();
    }

    private selectPrevious() {
        if (this.searchResults.length === 0) return;
        this.selectedIndex =
            (this.selectedIndex - 1 + this.searchResults.length) % this.searchResults.length;
        this.updateSelection();
    }

    private updateSelection() {
        this.searchResults.forEach((result: HTMLDivElement, index: number) => {
            if (index === this.selectedIndex) {
                result.classList.add('selected');
                result.scrollIntoView({ block: 'nearest' });
            } else {
                result.classList.remove('selected');
            }
        });
    }

    private selectCurrent() {
        if (this.selectedIndex >= 0 && this.selectedIndex < this.searchResults.length) {
            this.searchResults[this.selectedIndex].click();
        }
    }

    private performSearch() {
        const query: string = this.searchInput.value.toLowerCase();
        this.clearResults();
        this.clearHighlights();

        if (!query.trim()) {
            this.resultsContainer.style.display = 'none';
            return;
        }

        this.resultsContainer.style.display = 'block';
        const searchResults: SearchResult[] = this.searchMenuItems(query);
        this.displayResults(searchResults, query);
    }

    private clearHighlights() {
        for (const element of this.activeElements) {
            element.classList.remove('frost-search-highlight');
        }
        this.activeElements.clear();
    }

    private openCategory(category: CategoryData): void {
        const categoryContent = category.element.querySelector(
            '.frost-category-content'
        ) as HTMLElement;
        if (categoryContent && !categoryContent.classList.contains('open')) {
            const categoryHeader = category.element.querySelector(
                '.frost-category-header'
            ) as HTMLElement;
            if (categoryHeader) {
                categoryHeader.click();
            }
        }
    }

    private detectComponentType(element: HTMLElement): SearchResult['componentType'] {
        if (element.classList.contains('frost-toggle')) return 'toggle';
        if (element.classList.contains('frost-switch-container')) return 'switch';
        if (element.classList.contains('frost-slider')) return 'slider';
        if (element.classList.contains('frost-dual-slider')) return 'dualSlider';
        if (element.classList.contains('frost-radio-group')) return 'radioGroup';
        if (element.classList.contains('frost-select-container')) return 'select';
        if (element.classList.contains('frost-color-input')) return 'colorInput';
        if (element.classList.contains('frost-multi-select-container')) return 'multiSelect';
        if (element.classList.contains('frost-page-selector')) return 'pageSelector';
        if (element.classList.contains('frost-button-container')) return 'button';
        if (element.classList.contains('frost-order-list')) return 'orderList';
        if (element.classList.contains('frost-chart')) return 'chart';
        if (element.classList.contains('frost-grid-selector')) return 'gridSelector';
        return undefined;
    }

    private formatComponentType(type: string): string {
        return type
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase())
            .trim();
    }

    private getCategoryNameFromElement(element: HTMLElement): string | undefined {
        let current: HTMLElement | null = element;
        while (current && !current.classList.contains('frost-menu')) {
            if (current.classList.contains('frost-category')) {
                const titleElement = current.querySelector('.frost-category-title');
                return titleElement?.textContent || undefined;
            }
            current = current.parentElement;
        }
        return undefined;
    }

    private searchMenuItems(query: string): SearchResult[] {
        const results: SearchResult[] = [];
        const lowerQuery: string = query.toLowerCase();

        for (const [menuName, menu] of this.menus) {
            const categories: Map<string, CategoryData> = menu.getCategories();

            for (const [categoryName, category] of categories) {
                if (categoryName.toLowerCase().includes(lowerQuery)) {
                    results.push({
                        text: categoryName,
                        path: [],
                        element: category.element,
                        type: 'category',
                        category,
                        menu,
                        menuName,
                    });

                    category.element.classList.add('frost-search-highlight');
                    this.activeElements.add(category.element);
                }

                const items: Map<string, HTMLElement> = category.items;
                for (const [itemName, element] of items) {
                    if (itemName.toLowerCase().includes(lowerQuery)) {
                        results.push({
                            text: itemName,
                            path: [categoryName],
                            element: element as HTMLElement,
                            type: 'item',
                            componentType: this.detectComponentType(element as HTMLElement),
                            category,
                            menu,
                            menuName,
                        });

                        (element as HTMLElement).classList.add('frost-search-highlight');
                        this.activeElements.add(element as HTMLElement);
                    }
                }
            }
        }

        return results;
    }

    private highlightText(text: string, query: string): string {
        const lowerText = text.toLowerCase();
        const lowerQuery = query.toLowerCase();
        const index = lowerText.indexOf(lowerQuery);

        if (index === -1) return text;

        const before: string = text.slice(0, index);
        const match: string = text.slice(index, index + query.length);
        const after: string = text.slice(index + query.length);

        return `${before}<span class="highlight">${match}</span>${after}`;
    }

    private addGlowEffect(element: HTMLElement) {
        element.classList.add('frost-search-selected');

        setTimeout(() => {
            element.classList.remove('frost-search-selected');
        }, 2000);
    }

    private displayResults(results: SearchResult[], query: string) {
        this.clearResults();
        this.selectedIndex = -1;

        const existingEmpty: Element | null =
            this.resultsContainer.querySelector('.frost-search-empty');
        if (existingEmpty) {
            existingEmpty.remove();
        }

        if (!query.trim()) {
            return;
        }

        if (results.length === 0) {
            const emptyState: HTMLDivElement = document.createElement('div');
            emptyState.className = 'frost-search-empty';
            emptyState.textContent = 'No results found';
            this.resultsContainer.appendChild(emptyState);
            return;
        }

        for (const result of results) {
            const resultElement = document.createElement('div');
            resultElement.className = 'frost-search-result';

            const typeIndicator = document.createElement('span');
            typeIndicator.className = 'type-indicator';
            typeIndicator.innerHTML = result.type === 'category' ? icons.category : icons.item;

            const contentWrapper = document.createElement('div');
            contentWrapper.style.flex = '1';

            const itemName = document.createElement('div');
            itemName.className = 'item-name';
            itemName.innerHTML = this.highlightText(result.text, query);

            if (result.type === 'category') {
                const menuIndicator = document.createElement('span');
                menuIndicator.className = 'menu-indicator';
                menuIndicator.textContent = ` - ${result.menuName}`;
                itemName.appendChild(menuIndicator);
            } else if (result.type === 'item') {
                let categoryName = result.path.length > 0 ? result.path[0] : undefined;
                if (!categoryName || categoryName === 'undefined') {
                    categoryName = this.getCategoryNameFromElement(result.element);
                }
                if (categoryName && categoryName !== 'undefined') {
                    const categoryIndicator = document.createElement('span');
                    categoryIndicator.className = 'category-indicator';
                    categoryIndicator.textContent = ` (${categoryName})`;
                    itemName.appendChild(categoryIndicator);
                }
            }

            contentWrapper.appendChild(itemName);

            if (result.type === 'item' && result.componentType) {
                const typeBadge = document.createElement('span');
                typeBadge.className = 'component-type-badge';
                typeBadge.textContent = this.formatComponentType(result.componentType);
                contentWrapper.appendChild(typeBadge);
            }
            resultElement.appendChild(typeIndicator);
            resultElement.appendChild(contentWrapper);

            resultElement.addEventListener('click', () => {
                this.hide();

                if (!result.menu.isMenuOpen()) {
                    result.menu.toggle();
                }

                if (result.type === 'category' && result.category) {
                    this.openCategory(result.category);
                    this.addGlowEffect(result.category.element);
                } else if (result.type === 'item' && result.category) {
                    this.openCategory(result.category);
                    setTimeout(() => {
                        const menuContainer = result.menu.getContainer();
                        if (menuContainer) {
                            menuContainer.scrollTo({
                                top: result.element.offsetTop - menuContainer.offsetHeight / 2,
                                behavior: 'smooth',
                            });
                        }
                        result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        result.element.focus();
                        this.addGlowEffect(result.element);
                    }, 150);
                }
            });

            this.resultsContainer.appendChild(resultElement);
            this.searchResults.push(resultElement);
        }

        if (this.searchResults.length > 0) {
            this.selectedIndex = 0;
            this.updateSelection();
        }
    }

    private clearResults() {
        for (const result of this.searchResults) {
            result.remove();
        }
        this.searchResults = [];
        this.selectedIndex = -1;
    }

    public show() {
        this.isVisible = true;
        this.container.classList.add('visible');
        this.resultsContainer.style.display = 'none';
        setTimeout(() => {
            this.searchInput.focus();
        }, 50);
    }

    public hide() {
        this.isVisible = false;
        this.container.classList.remove('visible');
        this.searchInput.value = '';
        this.clearResults();
        this.clearHighlights();
    }

    public toggle() {
        if (this.isVisible) {
            this.hide();
        } else {
            this.show();
        }
    }
}

function isMac() {
    return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
}
