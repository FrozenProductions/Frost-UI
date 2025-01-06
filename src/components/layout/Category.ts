import type { CategoryData } from "../../types/index";

function createCategory(name: string): CategoryData {
    const category: HTMLDivElement = document.createElement("div");
    category.className = "frost-category";

    const header: HTMLDivElement = document.createElement("div");
    header.className = "frost-category-header";

    const title: HTMLSpanElement = document.createElement("span");
    title.className = "frost-category-title";
    title.textContent = name;

    const content: HTMLDivElement = document.createElement("div");
    content.className = "frost-category-content";

    header.addEventListener("click", () => {
        content.classList.toggle("open");
    });

    header.appendChild(title);
    category.appendChild(header);
    category.appendChild(content);

    return {
        element: category,
        items: new Map(),
    };
}

export { createCategory };
