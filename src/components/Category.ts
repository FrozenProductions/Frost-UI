interface CategoryData {
    element: HTMLDivElement;
    items: Map<string, HTMLElement>;
}

function createCategory(name: string): CategoryData {
    const category: HTMLDivElement = document.createElement('div');
    category.className = 'fcp-category';
    
    const header: HTMLDivElement = document.createElement('div');
    header.className = 'fcp-category-header';
    
    const title: HTMLSpanElement = document.createElement('span');
    title.className = 'fcp-category-title';
    title.textContent = name;
    
    const content: HTMLDivElement = document.createElement('div');
    content.className = 'fcp-category-content';
    
    header.addEventListener('click', () => {
        content.classList.toggle('open');
    });
    
    header.appendChild(title);
    category.appendChild(header);
    category.appendChild(content);
    
    return {
        element: category,
        items: new Map()
    };
} 

export { createCategory, CategoryData };