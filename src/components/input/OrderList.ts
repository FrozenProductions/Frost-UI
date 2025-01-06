import icons from "../../icons";
import type { OrderListCallback, OrderListElement } from "../../types/index";

function createOrderList(name: string, items: string[] = [], callback?: OrderListCallback): OrderListElement {
    const container = document.createElement("div") as OrderListElement;
    container.className = "frost-order-list";

    const label: HTMLDivElement = document.createElement("div");
    label.className = "frost-order-label";
    label.textContent = name;

    const listContainer: HTMLDivElement = document.createElement("div");
    listContainer.className = "frost-order-items";

    let currentItems: string[] = [...items];
    let draggedItem: HTMLDivElement | null = null;
    let dragStartY = 0;
    let itemHeight = 0;
    let initialIndex = -1;
    let isAnimating = false;

    const animateSwap = (item1: HTMLElement, item2: HTMLElement, moveUp: boolean) => {
        const height: number = item1.offsetHeight;
        const gap: number = 8;
        const distance: number = height + gap;

        item1.style.transition = "transform 0.2s ease-in-out";
        item2.style.transition = "transform 0.2s ease-in-out";

        item1.style.transform = moveUp ? `translateY(-${distance}px)` : `translateY(${distance}px)`;
        item2.style.transform = moveUp ? `translateY(${distance}px)` : `translateY(-${distance}px)`;

        return new Promise<void>((resolve: () => void) => {
            setTimeout(() => {
                resolve();
            }, 200);
        });
    };

    const createItem = (text: string, index: number): HTMLDivElement => {
        const item: HTMLDivElement = document.createElement("div");
        item.className = "frost-order-item";

        const handle: HTMLDivElement = document.createElement("div");
        handle.className = "frost-order-handle";
        handle.innerHTML = icons.order_list;

        const content: HTMLSpanElement = document.createElement("span");
        content.className = "frost-order-content";
        content.textContent = text;

        const moveUpBtn: HTMLButtonElement = document.createElement("button");
        moveUpBtn.className = "frost-order-move-up";
        moveUpBtn.innerHTML = icons.up_arrow;
        moveUpBtn.onclick = async (e: MouseEvent) => {
            e.stopPropagation();
            if (index > 0 && !isAnimating) {
                isAnimating = true;
                const items = [...listContainer.querySelectorAll(".frost-order-item")] as HTMLElement[];
                const currentItem: HTMLElement = items[index];
                const prevItem: HTMLElement = items[index - 1];

                await animateSwap(currentItem, prevItem, true);

                const temp = currentItems[index];
                currentItems[index] = currentItems[index - 1];
                currentItems[index - 1] = temp;

                updateList();
                isAnimating = false;
            }
        };

        const moveDownBtn = document.createElement("button");
        moveDownBtn.className = "frost-order-move-down";
        moveDownBtn.innerHTML = icons.down_arrow;
        moveDownBtn.onclick = async (e: MouseEvent) => {
            e.stopPropagation();
            if (index < currentItems.length - 1 && !isAnimating) {
                isAnimating = true;
                const items = [...listContainer.querySelectorAll(".frost-order-item")] as HTMLElement[];
                const currentItem: HTMLElement = items[index];
                const nextItem: HTMLElement = items[index + 1];

                await animateSwap(currentItem, nextItem, false);

                const temp: string = currentItems[index];
                currentItems[index] = currentItems[index + 1];
                currentItems[index + 1] = temp;

                updateList();
                isAnimating = false;
            }
        };

        const controls: HTMLDivElement = document.createElement("div");
        controls.className = "frost-order-controls";
        controls.appendChild(moveUpBtn);
        controls.appendChild(moveDownBtn);

        item.appendChild(handle);
        item.appendChild(content);
        item.appendChild(controls);

        handle.addEventListener("mousedown", (e: MouseEvent) => {
            if (isAnimating) return;
            e.preventDefault();
            draggedItem = item;
            dragStartY = e.clientY;
            itemHeight = item.offsetHeight;
            initialIndex = index;

            item.classList.add("dragging");

            const items = [...listContainer.querySelectorAll(".frost-order-item")] as HTMLElement[];
            for (const [idx, itm] of items.entries()) {
                itm.style.transition = "transform 0.15s ease-in-out";
                itm.style.transform = "translateY(0)";
                itm.setAttribute("data-index", idx.toString());
            }
        });

        return item;
    };

    const updateList = () => {
        listContainer.innerHTML = "";
        currentItems.forEach((item, index) => {
            listContainer.appendChild(createItem(item, index));
        });
        if (callback) callback(currentItems);
    };

    document.addEventListener("mousemove", (e: MouseEvent) => {
        if (!draggedItem || !itemHeight) return;

        const deltaY: number = e.clientY - dragStartY;
        const items: HTMLElement[] = [...listContainer.querySelectorAll(".frost-order-item")] as HTMLElement[];
        const currentIndex: number = initialIndex + Math.round(deltaY / itemHeight);

        draggedItem.style.transform = `translateY(${deltaY}px)`;
        draggedItem.style.transition = "none";

        for (const item of items) {
            if (item === draggedItem) continue;

            const itemIndex: number = Number.parseInt(item.getAttribute("data-index") || "0");
            const shift: number = getShiftAmount(itemIndex, initialIndex, currentIndex);

            item.style.transform = `translateY(${shift * itemHeight}px)`;
        }
    });

    const getShiftAmount = (itemIndex: number, startIndex: number, currentIndex: number): number => {
        if (currentIndex >= startIndex) {
            if (itemIndex > startIndex && itemIndex <= currentIndex) return -1;
        } else {
            if (itemIndex < startIndex && itemIndex >= currentIndex) return 1;
        }
        return 0;
    };

    document.addEventListener("mouseup", () => {
        if (!draggedItem) return;

        const items = [...listContainer.querySelectorAll(".frost-order-item")] as HTMLElement[];
        const deltaY: number =
            Number.parseFloat(draggedItem.style.transform.replace("translateY(", "").replace("px)", "")) || 0;
        const newIndex = Math.min(Math.max(0, initialIndex + Math.round(deltaY / itemHeight)), items.length - 1);

        if (newIndex !== initialIndex) {
            const [item] = currentItems.splice(initialIndex, 1);
            currentItems.splice(newIndex, 0, item);
            updateList();
        } else {
            for (const item of items) {
                item.style.transform = "translateY(0)";
                item.style.transition = "transform 0.15s ease-in-out";
            }
        }

        draggedItem.classList.remove("dragging");
        draggedItem = null;
        itemHeight = 0;
        initialIndex = -1;
    });

    container.appendChild(label);
    container.appendChild(listContainer);
    updateList();

    container.getValue = () => currentItems;
    container.setValue = (values: string[]) => {
        currentItems = [...values];
        updateList();
    };

    return container;
}

export { createOrderList };
