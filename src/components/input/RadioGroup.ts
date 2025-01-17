import type { RadioCallback, RadioGroupElement } from "../../types/index";

function createRadioGroup(
    name: string,
    options: string[] = [],
    defaultValue?: string,
    callback?: RadioCallback
): RadioGroupElement {
    const container = document.createElement("div") as RadioGroupElement;
    container.className = "frost-radio-group";

    const label: HTMLDivElement = document.createElement("div");
    label.className = "frost-radio-label";
    label.textContent = name;

    const optionsContainer: HTMLDivElement = document.createElement("div");
    optionsContainer.className = "frost-radio-options";

    const optionsArray: string[] = Array.isArray(options) ? options : [options];
    let currentValue: string = defaultValue || optionsArray[0];

    for (const option of optionsArray) {
        const radioButton: HTMLButtonElement = document.createElement("button");
        radioButton.className = "frost-radio-option";
        if (option === currentValue) {
            radioButton.classList.add("active");
        }

        const radioIcon: HTMLDivElement = document.createElement("div");
        radioIcon.className = "frost-radio-icon";

        const ripple: HTMLDivElement = document.createElement("div");
        ripple.className = "frost-radio-ripple";

        const radioText: HTMLSpanElement = document.createElement("span");
        radioText.className = "frost-radio-text";
        radioText.textContent = option;

        radioIcon.appendChild(ripple);
        radioButton.appendChild(radioIcon);
        radioButton.appendChild(radioText);

        radioButton.addEventListener("click", () => {
            if (currentValue === option) return;

            for (const btn of optionsContainer.querySelectorAll(".frost-radio-option")) {
                btn.classList.remove("active");
            }

            radioButton.classList.add("active");
            currentValue = option;

            ripple.style.animation = "none";
            requestAnimationFrame(() => {
                ripple.style.animation = "radioRipple 0.4s ease-out";
            });

            if (callback) callback(option);
        });

        optionsContainer.appendChild(radioButton);
    }

    container.appendChild(label);
    container.appendChild(optionsContainer);

    container.getValue = () => currentValue;
    container.setValue = (value: string) => {
        if (optionsArray.includes(value)) {
            currentValue = value;
            for (const btn of optionsContainer.querySelectorAll(".frost-radio-option")) {
                btn.classList.remove("active");
                if (btn.querySelector(".frost-radio-text")?.textContent === value) {
                    btn.classList.add("active");
                }
            }
            if (callback) callback(value);
        }
    };

    return container;
}

export { createRadioGroup };
