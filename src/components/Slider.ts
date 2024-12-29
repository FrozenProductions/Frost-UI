interface SliderElement extends HTMLDivElement {
    getValue: () => number;
    setValue: (value: number) => void;
}

type SliderCallback = (value: number) => void;

function createSlider(
    name: string,
    min: number,
    max: number,
    defaultValue: number,
    callback?: SliderCallback
): SliderElement {
    const slider: SliderElement = document.createElement("div") as SliderElement;
    slider.className = "frost-slider";

    const label: HTMLSpanElement = document.createElement("span");
    label.textContent = name;

    const controlsWrapper: HTMLDivElement = document.createElement("div");
    controlsWrapper.className = "frost-slider-controls";

    const input: HTMLInputElement = document.createElement("input");
    input.type = "range";
    input.min = min.toString();
    input.max = max.toString();
    input.value = defaultValue.toString();

    const valueInput: HTMLInputElement = document.createElement("input");
    valueInput.type = "text";
    valueInput.className = "frost-slider-value";
    valueInput.value = defaultValue.toString();
    valueInput.maxLength = 5;

    slider.appendChild(label);
    controlsWrapper.appendChild(input);
    controlsWrapper.appendChild(valueInput);
    slider.appendChild(controlsWrapper);

    const updateSliderBackground: (val: number) => void = (val: number): void => {
        const percentage: number = ((val - min) / (max - min)) * 100;
        input.style.background = `linear-gradient(to right, #7289da 0%, #7289da ${percentage}%, rgba(60, 60, 80, 0.6) ${percentage}%)`;
    };

    const updateValue: (val: number) => void = (val: number): void => {
        val = Math.min(Math.max(val, min), max);
        input.value = val.toString();
        valueInput.value = val.toString();
        updateSliderBackground(val);
        if (callback) callback(val);
    };

    updateSliderBackground(defaultValue);

    input.addEventListener("input", () => {
        updateValue(Number(input.value));
    });

    valueInput.addEventListener("input", (e: Event) => {
        const target = e.target as HTMLInputElement;
        const val: string = target.value.replace(/[^\d.-]/g, "");
        valueInput.value = val;

        if (val !== "") {
            const numVal = Number(val);
            if (numVal < min || numVal > max) {
                valueInput.classList.add("invalid");
                setTimeout(() => {
                    valueInput.classList.remove("invalid");
                }, 400);
            }
        }
    });

    valueInput.addEventListener("blur", () => {
        const val: string = valueInput.value;

        if (val === "" || isNaN(Number(val))) {
            valueInput.value = defaultValue.toString();
            updateValue(defaultValue);
            return;
        }

        const numVal = Number(val);

        if (numVal < min) {
            valueInput.classList.add("invalid");
            setTimeout(() => {
                valueInput.classList.remove("invalid");
                valueInput.value = min.toString();
                updateValue(min);
            }, 400);
            return;
        }

        if (numVal > max) {
            valueInput.classList.add("invalid");
            setTimeout(() => {
                valueInput.classList.remove("invalid");
                valueInput.value = max.toString();
                updateValue(max);
            }, 400);
            return;
        }

        updateValue(numVal);
    });

    valueInput.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            valueInput.blur();
        }
    });

    slider.getValue = () => Number(input.value);
    slider.setValue = (value: number) => updateValue(value);

    return slider;
}

export { createSlider, SliderElement };
