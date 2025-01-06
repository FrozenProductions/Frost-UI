import type { MultiSelectCallback, MultiSelectElement } from "../../types/index";

function createMultiSelect(
    name: string,
    options: string[] = [],
    defaultValues: string[] = [],
    callback?: MultiSelectCallback
): MultiSelectElement {
    const container = document.createElement("div") as MultiSelectElement;
    container.className = "frost-multi-select-container";

    const label: HTMLDivElement = document.createElement("div");
    label.className = "frost-multi-select-label";
    label.textContent = name;

    const select: HTMLDivElement = document.createElement("div");
    select.className = "frost-multi-select";

    const selectedDisplay: HTMLDivElement = document.createElement("div");
    selectedDisplay.className = "frost-multi-select-value";

    const dropdown: HTMLDivElement = document.createElement("div");
    dropdown.className = "frost-multi-select-dropdown";

    const menuContainer: Element | null = document.querySelector(".frost-menu");
    const themeClass: string | null | undefined = menuContainer
        ? Array.from(menuContainer.classList).find((c: string) => c.startsWith("frost-theme-"))
        : null;
    if (themeClass) {
        dropdown.classList.add(themeClass);
    }

    const selected = new Set<string>(defaultValues);

    const updateDisplay = (): void => {
        if (selected.size === 0) {
            selectedDisplay.textContent = "None";
        } else {
            selectedDisplay.textContent = Array.from(selected).join(", ");
        }
    };

    const positionDropdown = (): void => {
        const rect: DOMRect = select.getBoundingClientRect();
        dropdown.style.left = `${rect.left}px`;
        dropdown.style.top = `${rect.bottom + 4}px`;
        dropdown.style.width = `${rect.width}px`;
    };

    for (const option of options) {
        const item: HTMLDivElement = document.createElement("div");
        item.className = "frost-multi-select-item";
        if (selected.has(option)) {
            item.classList.add("selected");
        }

        const checkbox: HTMLDivElement = document.createElement("div");
        checkbox.className = "frost-multi-select-checkbox";

        const text: HTMLSpanElement = document.createElement("span");
        text.textContent = option;

        item.appendChild(checkbox);
        item.appendChild(text);
        dropdown.appendChild(item);

        item.addEventListener("click", (e: MouseEvent) => {
            e.stopPropagation();
            if (selected.has(option)) {
                selected.delete(option);
                item.classList.remove("selected");
            } else {
                selected.add(option);
                item.classList.add("selected");
            }
            updateDisplay();
            if (callback) callback(Array.from(selected));
        });
    }

    select.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".frost-multi-select-dropdown")) {
            positionDropdown();
            dropdown.classList.toggle("show");
        }
    });

    document.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".frost-multi-select")) {
            dropdown.classList.remove("show");
        }
    });

    window.addEventListener("resize", () => {
        if (dropdown.classList.contains("show")) {
            positionDropdown();
        }
    });

    document.addEventListener(
        "scroll",
        (e: Event) => {
            const target = e.target as HTMLElement;
            if (
                dropdown.classList.contains("show") &&
                ((target instanceof HTMLElement && target.contains(container)) || target === document.documentElement)
            ) {
                positionDropdown();
            }
        },
        true
    );

    updateDisplay();

    select.appendChild(selectedDisplay);
    document.body.appendChild(dropdown);
    container.appendChild(label);
    container.appendChild(select);

    container.getValue = () => Array.from(selected);
    container.setValue = (values: string[]) => {
        selected.clear();
        for (const value of values) {
            selected.add(value);
        }
        updateDisplay();
        for (const item of dropdown.querySelectorAll(".frost-multi-select-item")) {
            const value: string | null | undefined = item.querySelector("span")?.textContent;
            if (value) {
                item.classList.toggle("selected", selected.has(value));
            }
        }
        if (callback) callback(Array.from(selected));
    };

    const observer: MutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
        for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "class" && menuContainer) {
                const newThemeClass: string | undefined = Array.from(menuContainer.classList).find((c: string) =>
                    c.startsWith("frost-theme-")
                );
                dropdown.classList.remove(
                    ...Array.from(dropdown.classList).filter((c: string) => c.startsWith("frost-theme-"))
                );
                if (newThemeClass) {
                    dropdown.classList.add(newThemeClass);
                }
            }
        }
    });

    if (menuContainer) {
        observer.observe(menuContainer, { attributes: true });
    }

    return container;
}

export { createMultiSelect };
