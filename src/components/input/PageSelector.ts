import icons from "../../icons";
import type { PageCallback, PageSelectorElement } from "../../types/index";

function createPageSelector(
    name: string,
    pages: string[] = [],
    defaultPage = 0,
    callback?: PageCallback
): PageSelectorElement {
    const container = document.createElement("div") as PageSelectorElement;
    container.className = "frost-page-selector";

    const label: HTMLDivElement = document.createElement("div");
    label.className = "frost-page-label";
    label.textContent = name;

    const controls: HTMLDivElement = document.createElement("div");
    controls.className = "frost-page-controls";

    const leftArrow: HTMLDivElement = document.createElement("div");
    leftArrow.className = "frost-page-arrow";
    leftArrow.innerHTML = icons.page_left;

    const pageValue: HTMLDivElement = document.createElement("div");
    pageValue.className = "frost-page-value";

    const rightArrow: HTMLDivElement = document.createElement("div");
    rightArrow.className = "frost-page-arrow";
    rightArrow.innerHTML = icons.page_right;

    let currentPage: number = defaultPage;

    const updateDisplay = (triggerCallback = false): void => {
        pageValue.classList.add("switching-out");

        setTimeout(() => {
            pageValue.textContent = pages[currentPage];

            pageValue.classList.remove("switching-out");
            pageValue.classList.add("switching-in");

            leftArrow.style.opacity = currentPage === 0 ? "0.2" : "0.6";
            rightArrow.style.opacity = currentPage === pages.length - 1 ? "0.2" : "0.6";

            setTimeout(() => {
                pageValue.classList.remove("switching-in");
            }, 200);

            if (triggerCallback && callback) {
                callback(pages[currentPage], currentPage);
            }
        }, 150);
    };

    updateDisplay(false);

    container.addEventListener("mouseenter", () => {
        leftArrow.style.opacity = currentPage > 0 ? "0.8" : "0.2";
        rightArrow.style.opacity = currentPage < pages.length - 1 ? "0.8" : "0.2";
    });

    container.addEventListener("mouseleave", () => {
        leftArrow.style.opacity = currentPage === 0 ? "0.2" : "0.6";
        rightArrow.style.opacity = currentPage === pages.length - 1 ? "0.2" : "0.6";
    });

    leftArrow.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            updateDisplay(true);
        }
    });

    rightArrow.addEventListener("click", () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updateDisplay(true);
        }
    });

    controls.appendChild(leftArrow);
    controls.appendChild(pageValue);
    controls.appendChild(rightArrow);

    container.appendChild(label);
    container.appendChild(controls);

    container.getValue = () => currentPage;
    container.setValue = (value: number) => {
        if (value >= 0 && value < pages.length) {
            currentPage = value;
            updateDisplay(true);
        }
    };

    return container;
}

export { createPageSelector };
