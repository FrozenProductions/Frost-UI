interface PageSelectorElement extends HTMLDivElement {
    getValue: () => number;
    setValue: (value: number) => void;
}

type PageCallback = (value: string, index: number) => void;

function createPageSelector(
    name: string,
    pages: string[] = [],
    defaultPage = 0,
    callback?: PageCallback
): PageSelectorElement {
    const container = document.createElement('div') as PageSelectorElement;
    container.className = 'frost-page-selector';

    const label: HTMLDivElement = document.createElement('div');
    label.className = 'frost-page-label';
    label.textContent = name;

    const controls: HTMLDivElement = document.createElement('div');
    controls.className = 'frost-page-controls';

    const leftArrow: HTMLDivElement = document.createElement('div');
    leftArrow.className = 'frost-page-arrow';
    leftArrow.innerHTML = '<';

    const pageValue: HTMLDivElement = document.createElement('div');
    pageValue.className = 'frost-page-value';

    const rightArrow: HTMLDivElement = document.createElement('div');
    rightArrow.className = 'frost-page-arrow';
    rightArrow.innerHTML = '>';

    let currentPage: number = defaultPage;

    const updateDisplay = (triggerCallback = false): void => {
        pageValue.textContent = pages[currentPage];
        leftArrow.style.opacity = currentPage === 0 ? '0.2' : '0.6';
        rightArrow.style.opacity = currentPage === pages.length - 1 ? '0.2' : '0.6';

        pageValue.style.transform = 'translateY(-2px)';
        pageValue.style.opacity = '0';

        setTimeout(() => {
            pageValue.style.transform = 'translateY(0)';
            pageValue.style.opacity = '1';
        }, 50);

        if (triggerCallback && callback) {
            callback(pages[currentPage], currentPage);
        }
    };

    updateDisplay(false);

    container.addEventListener('mouseenter', () => {
        leftArrow.style.opacity = currentPage > 0 ? '0.8' : '0.2';
        rightArrow.style.opacity = currentPage < pages.length - 1 ? '0.8' : '0.2';
    });

    container.addEventListener('mouseleave', () => {
        leftArrow.style.opacity = currentPage === 0 ? '0.2' : '0.6';
        rightArrow.style.opacity = currentPage === pages.length - 1 ? '0.2' : '0.6';
    });

    leftArrow.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateDisplay(true);
        }
    });

    rightArrow.addEventListener('click', () => {
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

export { createPageSelector, type PageSelectorElement };
