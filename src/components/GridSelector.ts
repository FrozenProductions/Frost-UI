interface GridSelectorElement extends HTMLDivElement {
    getValue: () => string[];
    setValue: (values: string[]) => void;
}

interface GridItem {
    id: string;
    icon?: string;
    label: string;
}

type GridSelectorCallback = (selected: string[]) => void;

function createGridSelector(
    name: string,
    items: GridItem[] = [],
    defaultSelected: string[] = [],
    callback?: GridSelectorCallback,
    columns = 3
): GridSelectorElement {
    const container = document.createElement("div") as GridSelectorElement;
    container.className = "frost-grid-selector";

    const label = document.createElement("div");
    label.className = "frost-grid-label";
    label.textContent = name;

    const grid = document.createElement("div");
    grid.className = "frost-grid-container";
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    const selected = new Set<string>(defaultSelected);

    const updateSelection = () => {
        if (callback) {
            callback(Array.from(selected));
        }
    };

    for (const item of items) {
        const gridItem = document.createElement("div") as GridSelectorElement;
        gridItem.className = "frost-grid-item";
        if (selected.has(item.id)) {
            gridItem.classList.add("selected");
        }

        if (item.icon) {
            const iconContainer: HTMLDivElement = document.createElement("div");
            iconContainer.className = "frost-grid-icon";
            iconContainer.innerHTML = item.icon;
            gridItem.appendChild(iconContainer);
        }

        const itemLabel: HTMLSpanElement = document.createElement("span");
        itemLabel.className = "frost-grid-item-label";
        itemLabel.textContent = item.label;
        gridItem.appendChild(itemLabel);

        gridItem.addEventListener("click", () => {
            if (selected.has(item.id)) {
                selected.delete(item.id);
                gridItem.classList.remove("selected");
            } else {
                selected.add(item.id);
                gridItem.classList.add("selected");
            }
            updateSelection();
        });

        grid.appendChild(gridItem);
    }

    container.appendChild(label);
    container.appendChild(grid);

    container.getValue = () => Array.from(selected);
    container.setValue = (values: string[]) => {
        selected.clear();
        for (const value of values) {
            selected.add(value);
        }

        grid.querySelectorAll(".frost-grid-item").forEach((item: Element, index: number) => {
            item.classList.toggle("selected", selected.has(items[index].id));
        });

        updateSelection();
    };

    return container;
}

export { createGridSelector, type GridSelectorElement, type GridItem };
