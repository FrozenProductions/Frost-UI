import {
    createButton,
    createCategory,
    createChart,
    createColorInput,
    createDualSlider,
    createGridSelector,
    createMultiSelect,
    createOrderList,
    createPageSelector,
    createRadioGroup,
    createSelect,
    createSlider,
    createSwitch,
    createToggle,
} from './components/index';
import { STORAGE_KEY_POSITIONS } from './types/config';
import type {
    ButtonElement,
    ButtonVariant,
    CategoryData,
    ChartElement,
    ChartOptions,
    ColorInputElement,
    DragOffset,
    DualSliderElement,
    DualSliderOptions,
    FrostTheme,
    GridConfig,
    GridItem,
    GridSelectorElement,
    MultiSelectElement,
    OrderListElement,
    PageSelectorElement,
    Position,
    RadioGroupElement,
    SelectElement,
    SliderElement,
    SliderOptions,
    StoredMenuPositions,
    SwitchElement,
    SwitchVariant,
    ToggleCallback,
    ToggleElement,
} from './types/index';

class FrostUI {
    private id: string;
    private title: string;
    private position: Position;
    private toggleKey: string;
    private isOpen: boolean;
    private categories: Map<string, CategoryData>;
    private isDragging: boolean;
    private dragOffset: DragOffset;
    private container!: HTMLDivElement;
    private gridConfig: GridConfig;
    private gridOverlay: HTMLDivElement | null = null;

    constructor(
        id: string,
        title: string,
        position: Position = { x: 100, y: 100 },
        toggleKey = 'ShiftRight',
        gridConfig: GridConfig = { enabled: false, gridSize: 20, showGrid: true }
    ) {
        this.id = id;
        this.title = title;
        this.position = this.loadSavedPosition() ?? position;
        this.toggleKey = toggleKey;
        this.gridConfig = gridConfig;
        this.isOpen = false;
        this.categories = new Map();
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };

        this.createMainContainer();
        this.setupEventListeners();

        document.addEventListener(
            'keydown',
            (e: KeyboardEvent) => {
                if (e.code === this.toggleKey && !e.repeat) {
                    const bindingInput: HTMLInputElement | null =
                        document.querySelector('.frost-keybind.binding');
                    if (bindingInput) return;

                    e.preventDefault();
                    e.stopPropagation();
                    this.toggle();
                }
            },
            true
        );
    }

    private createMainContainer(): void {
        this.container = document.createElement('div');
        this.container.className = 'frost-menu';
        this.container.style.display = 'none';

        const header: HTMLDivElement = document.createElement('div');
        header.className = 'frost-header';
        header.textContent = this.title;

        const content: HTMLDivElement = document.createElement('div');
        content.className = 'frost-content';

        this.container.appendChild(header);
        this.container.appendChild(content);
        document.body.appendChild(this.container);

        this.updatePosition();
    }

    private setupEventListeners(): void {
        const header: HTMLDivElement | null = this.container.querySelector('.frost-header');
        if (!header) return;

        header.addEventListener('mousedown', ((e: Event) => {
            const mouseEvent = e as MouseEvent;
            this.isDragging = true;
            this.dragOffset.x = mouseEvent.clientX - this.position.x;
            this.dragOffset.y = mouseEvent.clientY - this.position.y;

            if (this.gridConfig.enabled && this.gridConfig.showGrid) {
                this.showGridOverlay();
            }
        }) as EventListener);

        document.addEventListener('mousemove', (e: MouseEvent) => {
            if (this.isDragging) {
                let newX = e.clientX - this.dragOffset.x;
                let newY = e.clientY - this.dragOffset.y;

                if (this.gridConfig.enabled) {
                    newX = Math.round(newX / this.gridConfig.gridSize) * this.gridConfig.gridSize;
                    newY = Math.round(newY / this.gridConfig.gridSize) * this.gridConfig.gridSize;
                }

                this.position.x = newX;
                this.position.y = newY;
                this.updatePosition();
            }
        });

        document.addEventListener('mouseup', () => {
            if (this.isDragging) {
                this.isDragging = false;
                this.hideGridOverlay();
                this.savePosition();
            }
        });
    }

    private showGridOverlay(): void {
        if (this.gridOverlay) return;

        this.gridOverlay = document.createElement('div');
        this.gridOverlay.className = 'frost-grid-overlay';
        this.gridOverlay.style.setProperty('--grid-size', `${this.gridConfig.gridSize}px`);
        document.body.appendChild(this.gridOverlay);
    }

    private hideGridOverlay(): void {
        if (this.gridOverlay) {
            this.gridOverlay.remove();
            this.gridOverlay = null;
        }
    }

    public isMenuOpen(): boolean {
        return this.isOpen;
    }

    public getGridConfig(): GridConfig {
        return { ...this.gridConfig };
    }

    public setGridConfig(config: Partial<GridConfig>): void {
        this.gridConfig = { ...this.gridConfig, ...config };
    }

    public isGridEnabled(): boolean {
        return this.gridConfig.enabled;
    }

    public setGridEnabled(enabled: boolean): void {
        this.gridConfig.enabled = enabled;
    }

    public setToggleKey(key: string): void {
        this.toggleKey = key;
    }

    public getToggleKey(): string {
        return this.toggleKey;
    }

    public getTitle(): string {
        return this.title;
    }

    public toggle(): void {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.container.style.display = 'block';
            this.container.classList.remove('hide');
            this.container.classList.add('show');
            document.dispatchEvent(
                new CustomEvent('frost-menu-open', { detail: { menuId: this.id } })
            );
        } else {
            this.container.classList.remove('show');
            this.container.classList.add('hide');
            document.dispatchEvent(
                new CustomEvent('frost-menu-close', { detail: { menuId: this.id } })
            );
            setTimeout(() => {
                this.container.style.display = 'none';
            }, 200);
        }
    }

    private updatePosition(): void {
        this.container.style.left = `${this.position.x}px`;
        this.container.style.top = `${this.position.y}px`;
    }

    private loadSavedPosition(): Position | null {
        try {
            const stored = localStorage.getItem(STORAGE_KEY_POSITIONS);
            if (stored) {
                const positions: StoredMenuPositions = JSON.parse(stored);
                return positions[this.id] || null;
            }
        } catch {
            // Ignore
        }
        return null;
    }

    private savePosition(): void {
        try {
            const stored = localStorage.getItem(STORAGE_KEY_POSITIONS);
            const positions: StoredMenuPositions = stored ? JSON.parse(stored) : {};
            positions[this.id] = { x: this.position.x, y: this.position.y };
            localStorage.setItem(STORAGE_KEY_POSITIONS, JSON.stringify(positions));
        } catch {
            // Ignore
        }
    }

    public addCategory(name: string): this {
        if (!this.categories.has(name)) {
            const category: CategoryData = createCategory(name);
            const content: HTMLElement | null = this.container.querySelector('.frost-content');
            if (content) {
                content.appendChild(category.element);
                this.categories.set(name, category);
            }
        }
        return this;
    }

    public addToggle(
        category: string,
        name: string,
        callback?: ToggleCallback,
        keybind?: string
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const toggle: ToggleElement = createToggle(name, this.id, category, callback, keybind);
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(toggle);
            categoryData.items.set(name, toggle);
        }

        return this;
    }

    public addSwitch(
        category: string,
        name: string,
        defaultValue = false,
        callback?: (enabled: boolean) => void,
        variant: SwitchVariant = 'default'
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const switchElement: SwitchElement = createSwitch(name, defaultValue, callback, variant);
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(switchElement);
            categoryData.items.set(name, switchElement);
        }

        return this;
    }

    public addSlider(
        category: string,
        name: string,
        min: number,
        max: number,
        defaultValue: number,
        stepOrCallback?: number | ((value: number) => void),
        callback?: (value: number) => void
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const options: SliderOptions = {
            name,
            min,
            max,
            defaultValue,
            step: typeof stepOrCallback === 'number' ? stepOrCallback : 1,
            callback: typeof stepOrCallback === 'function' ? stepOrCallback : callback,
        };

        const slider: SliderElement = createSlider(options);
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(slider);
            categoryData.items.set(name, slider);
        }

        return this;
    }

    public addRadioGroup(
        category: string,
        name: string,
        options: string[],
        defaultValue: string,
        callback?: (value: string) => void
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const radioGroup: RadioGroupElement = createRadioGroup(
            name,
            options,
            defaultValue,
            callback
        );
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(radioGroup);
            categoryData.items.set(name, radioGroup);
        }

        return this;
    }

    public addSelect(
        category: string,
        name: string,
        options: string[] | string,
        defaultValue: string,
        callback?: (value: string) => void
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const select: SelectElement = createSelect(name, options, defaultValue, callback);
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(select);
            categoryData.items.set(name, select);
        }

        return this;
    }

    public addColorInput(
        category: string,
        name: string,
        defaultValue: string,
        callback?: (value: string) => void
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const colorInput: ColorInputElement = createColorInput(name, defaultValue, callback);
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(colorInput);
            categoryData.items.set(name, colorInput);
        }

        return this;
    }

    public addMultiSelect(
        category: string,
        name: string,
        options: string[],
        defaultValues: string[],
        callback?: (selected: string[]) => void
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const multiSelect: MultiSelectElement = createMultiSelect(
            name,
            options,
            defaultValues,
            callback
        );
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(multiSelect);
            categoryData.items.set(name, multiSelect);
        }

        return this;
    }

    public addPageSelector(
        category: string,
        name: string,
        pages: string[],
        defaultPage: number,
        callback?: (page: string) => void
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const pageSelector: PageSelectorElement = createPageSelector(
            name,
            pages,
            defaultPage,
            callback
        );
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(pageSelector);
            categoryData.items.set(name, pageSelector);
        }

        return this;
    }

    public addButton(
        category: string,
        name: string,
        callback?: () => void,
        variant: ButtonVariant = 'default'
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const button: ButtonElement = createButton(name, callback, variant);
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(button);
            categoryData.items.set(name, button);
        }

        return this;
    }

    public addOrderList(
        category: string,
        name: string,
        items: string[],
        callback?: (items: string[]) => void
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const orderList: OrderListElement = createOrderList(name, items, callback);
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(orderList);
            categoryData.items.set(name, orderList);
        }

        return this;
    }

    public addDualSlider(
        category: string,
        name: string,
        min: number,
        max: number,
        defaultStart: number,
        defaultEnd: number,
        stepOrCallback?: number | ((values: { start: number; end: number }) => void),
        callback?: (values: { start: number; end: number }) => void
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const options: DualSliderOptions = {
            name,
            min,
            max,
            defaultStart,
            defaultEnd,
            step: typeof stepOrCallback === 'number' ? stepOrCallback : 1,
            callback: typeof stepOrCallback === 'function' ? stepOrCallback : callback,
        };

        const dualSlider: DualSliderElement = createDualSlider(options);
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(dualSlider);
            categoryData.items.set(name, dualSlider);
        }

        return this;
    }

    public addChart(category: string, name: string, options: Omit<ChartOptions, 'name'>): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const chart: ChartElement = createChart({ ...options, name });
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(chart);
            categoryData.items.set(name, chart);
        }

        return this;
    }

    public addGridSelector(
        category: string,
        name: string,
        items: GridItem[],
        defaultSelected: string[] = [],
        callback?: (selected: string[]) => void,
        columns = 3
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const gridSelector: GridSelectorElement = createGridSelector(
            name,
            items,
            defaultSelected,
            callback,
            columns
        );
        const content: HTMLDivElement | null =
            categoryData.element.querySelector('.frost-category-content');
        if (content) {
            content.appendChild(gridSelector);
            categoryData.items.set(name, gridSelector);
        }

        return this;
    }

    public getCategories(): Map<string, CategoryData> {
        return this.categories;
    }

    public setTheme(theme: FrostTheme): this {
        if (!this.container) return this;

        const themeClasses: string[] = Array.from(this.container.classList).filter(
            (className: string) => className.startsWith('frost-theme-')
        );
        for (const className of themeClasses) {
            this.container.classList.remove(className);
        }

        if (theme !== 'dark') {
            this.container.classList.add(`frost-theme-${theme}`);
        }
        return this;
    }

    public getContainer(): HTMLDivElement {
        return this.container;
    }
}
export default FrostUI;
