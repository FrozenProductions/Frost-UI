import { createCategory, CategoryData } from "./components/Category";
import { createSlider, SliderElement } from "./components/Slider";
import { createToggle, ToggleCallback, ToggleElement } from "./components/Toggle";
import { createRadioGroup, RadioGroupElement } from "./components/RadioGroup";
import { createSelect, SelectElement } from "./components/Select";
import { ColorInputElement, createColorInput } from "./components/ColorInput";
import { createMultiSelect, MultiSelectElement } from "./components/MultiSelect";
import { createPageSelector, PageSelectorElement } from "./components/PageSelector";
import { createButton, ButtonElement, ButtonVariant } from "./components/Button";
import { createSwitch, SwitchElement, SwitchVariant } from "./components/Switch";
import "./core.css";

interface Position {
    x: number;
    y: number;
}

interface DragOffset {
    x: number;
    y: number;
}

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

    constructor(id: string, title: string, position: Position = { x: 100, y: 100 }, toggleKey: string = "ShiftRight") {
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

    public addSlider(
        category: string,
        name: string,
        min: number,
        max: number,
        defaultValue: number,
        callback?: (value: number) => void
    ): this {
        const categoryData: CategoryData | undefined = this.categories.get(category);
        if (!categoryData) return this;

        const slider: SliderElement = createSlider(name, min, max, defaultValue, callback);
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

    public addSwitch(
        category: string,
        name: string,
        defaultValue: boolean = false,
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

    public getCategories(): Map<string, CategoryData> {
        return this.categories;
    }
}

export default FrostUI;
