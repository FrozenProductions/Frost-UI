import { type ButtonElement, type ButtonVariant, createButton } from "./components/Button";
import { type CategoryData, createCategory } from "./components/Category";
import { type ChartElement, type ChartOptions, createChart } from "./components/Chart";
import { type ColorInputElement, createColorInput } from "./components/ColorInput";
import { type DualSliderElement, type DualSliderOptions, createDualSlider } from "./components/DualSlider";
import { type MultiSelectElement, createMultiSelect } from "./components/MultiSelect";
import { type OrderListElement, createOrderList } from "./components/OrderList";
import { type PageSelectorElement, createPageSelector } from "./components/PageSelector";
import { type RadioGroupElement, createRadioGroup } from "./components/RadioGroup";
import { type SelectElement, createSelect } from "./components/Select";
import { type SliderElement, type SliderOptions, createSlider } from "./components/Slider";
import { type SwitchElement, type SwitchVariant, createSwitch } from "./components/Switch";
import { type ToggleCallback, type ToggleElement, createToggle } from "./components/Toggle";
import "./core.css";

interface Position {
    x: number;
    y: number;
}

interface DragOffset {
    x: number;
    y: number;
}

export type FrostTheme = "dark" | "midnight" | "nord" | string;

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

    constructor(id: string, title: string, position: Position = { x: 100, y: 100 }, toggleKey = "ShiftRight") {
        this.id = id;
        this.title = title;
        this.position = position;
        this.toggleKey = toggleKey;
        this.isOpen = false;
        this.categories = new Map();
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };

        this.createMainContainer();
        this.setupEventListeners();

        document.addEventListener(
            "keydown",
            (e: KeyboardEvent) => {
                if (e.code === this.toggleKey && !e.repeat) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.toggle();
                }
            },
            true
        );
    }

    private createMainContainer(): void {
        this.container = document.createElement("div");
        this.container.className = "frost-menu";
        this.container.style.display = "none";

        const header: HTMLDivElement = document.createElement("div");
        header.className = "frost-header";
        header.textContent = this.title;

        const content: HTMLDivElement = document.createElement("div");
        content.className = "frost-content";

        this.container.appendChild(header);
        this.container.appendChild(content);
        document.body.appendChild(this.container);

        this.updatePosition();
    }

    private setupEventListeners(): void {
        const header: HTMLDivElement | null = this.container.querySelector(".frost-header");
        if (!header) return;

        header.addEventListener("mousedown", ((e: Event) => {
            const mouseEvent = e as MouseEvent;
            this.isDragging = true;
            this.dragOffset.x = mouseEvent.clientX - this.position.x;
            this.dragOffset.y = mouseEvent.clientY - this.position.y;
        }) as EventListener);

        document.addEventListener("mousemove", (e: MouseEvent) => {
            if (this.isDragging) {
                this.position.x = e.clientX - this.dragOffset.x;
                this.position.y = e.clientY - this.dragOffset.y;
                this.updatePosition();
            }
        });

        document.addEventListener("mouseup", () => {
            this.isDragging = false;
        });
    }

    public setToggleKey(key: string): void {
        this.toggleKey = key;
    }

    private toggle(): void {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.container.style.display = "block";
            this.container.classList.remove("hide");
            this.container.classList.add("show");
        } else {
            this.container.classList.remove("show");
            this.container.classList.add("hide");
            setTimeout(() => {
                this.container.style.display = "none";
            }, 200);
        }
    }

    private updatePosition(): void {
        this.container.style.left = `${this.position.x}px`;
        this.container.style.top = `${this.position.y}px`;
    }

    public addCategory(name: string): this {
        if (!this.categories.has(name)) {
            const category: CategoryData = createCategory(name);
            const content: HTMLElement | null = this.container.querySelector(".frost-content");
            if (content) {
                content.appendChild(category.element);
                this.categories.set(name, category);
            }
        }
        return this;
    }

    public addToggle(category: string, name: string, callback?: ToggleCallback, keybind?: string): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const toggle: ToggleElement = createToggle(name, this.id, category, callback, keybind);
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
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
        variant: SwitchVariant = "default"
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const switchElement: SwitchElement = createSwitch(name, defaultValue, callback, variant);
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
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
            step: typeof stepOrCallback === "number" ? stepOrCallback : 1,
            callback: typeof stepOrCallback === "function" ? stepOrCallback : callback,
        };

        const slider: SliderElement = createSlider(options);
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
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

        const radioGroup: RadioGroupElement = createRadioGroup(name, options, defaultValue, callback);
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
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
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
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
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
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

        const multiSelect: MultiSelectElement = createMultiSelect(name, options, defaultValues, callback);
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
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

        const pageSelector: PageSelectorElement = createPageSelector(name, pages, defaultPage, callback);
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
        if (content) {
            content.appendChild(pageSelector);
            categoryData.items.set(name, pageSelector);
        }

        return this;
    }

    public addButton(category: string, name: string, callback?: () => void, variant: ButtonVariant = "default"): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const button: ButtonElement = createButton(name, callback, variant);
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
        if (content) {
            content.appendChild(button);
            categoryData.items.set(name, button);
        }

        return this;
    }

    public addOrderList(category: string, name: string, items: string[], callback?: (items: string[]) => void): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const orderList: OrderListElement = createOrderList(name, items, callback);
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
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
            step: typeof stepOrCallback === "number" ? stepOrCallback : 1,
            callback: typeof stepOrCallback === "function" ? stepOrCallback : callback,
        };

        const dualSlider: DualSliderElement = createDualSlider(options);
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
        if (content) {
            content.appendChild(dualSlider);
            categoryData.items.set(name, dualSlider);
        }

        return this;
    }

    public addChart(category: string, name: string, options: Omit<ChartOptions, "name">): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const chart: ChartElement = createChart({ ...options, name });
        const content: HTMLDivElement | null = categoryData.element.querySelector(".frost-category-content");
        if (content) {
            content.appendChild(chart);
            categoryData.items.set(name, chart);
        }

        return this;
    }

    public getCategories(): Map<string, CategoryData> {
        return this.categories;
    }

    public setTheme(theme: FrostTheme): this {
        if (!this.container) return this;

        const themeClasses = Array.from(this.container.classList).filter((className) =>
            className.startsWith("frost-theme-")
        );
        for (const className of themeClasses) {
            this.container.classList.remove(className);
        }

        if (theme !== "dark") {
            this.container.classList.add(`frost-theme-${theme}`);
        }
        return this;
    }
}
export default FrostUI;
