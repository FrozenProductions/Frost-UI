interface SelectElement extends HTMLDivElement {
    getValue: () => string;
    setValue: (value: string) => void;
}

type SelectCallback = (value: string) => void;

function createSelect(
    name: string,
    options: string[] | string = [],
    defaultValue: string,
    callback?: SelectCallback
): SelectElement {
    const selectContainer = document.createElement("div") as SelectElement;
    selectContainer.className = "frost-select-container";

    const label: HTMLSpanElement = document.createElement("span");
    label.className = "frost-select-label";
    label.textContent = name;

    const select: HTMLDivElement = document.createElement("div");
    select.className = "frost-select";

    const selectedValue: HTMLDivElement = document.createElement("div");
    selectedValue.className = "frost-select-value";
    selectedValue.textContent = defaultValue;

    const dropdown: HTMLDivElement = document.createElement("div");
    dropdown.className = "frost-select-dropdown";

    const optionsArray: string[] = Array.isArray(options) ? options : [options];

    optionsArray.forEach((option: string) => {
        const optionElement: HTMLDivElement = document.createElement("div");
        optionElement.className = "frost-select-option";
        optionElement.textContent = option;

        optionElement.addEventListener("click", () => {
            selectedValue.textContent = option;
            dropdown.classList.remove("show");
            if (callback) callback(option);
        });

        dropdown.appendChild(optionElement);
    });

    select.appendChild(selectedValue);
    select.appendChild(dropdown);

    const positionDropdown = (): void => {
        const rect = select.getBoundingClientRect();
        dropdown.style.left = `${rect.left}px`;
        dropdown.style.top = `${rect.bottom + 4}px`;
        dropdown.style.width = `${rect.width}px`;
    };

    select.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".frost-select-dropdown")) {
            positionDropdown();
            dropdown.classList.toggle("show");
        }
    });

    document.addEventListener("click", (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".frost-select")) {
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
                ((target instanceof HTMLElement && target.contains(selectContainer)) ||
                    target === document.documentElement)
            ) {
                positionDropdown();
            }
        },
        true
    );

    selectContainer.appendChild(label);
    selectContainer.appendChild(select);

    document.body.appendChild(dropdown);

    selectContainer.getValue = () => selectedValue.textContent || defaultValue;
    selectContainer.setValue = (value: string) => {
        if (optionsArray.includes(value)) {
            selectedValue.textContent = value;
            if (callback) callback(value);
        }
    };

    return selectContainer;
}

export { createSelect, SelectElement };
