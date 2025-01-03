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
    const container = document.createElement('div') as SliderElement;
    container.className = 'frost-slider';

    const label: HTMLSpanElement = document.createElement('span');
    label.textContent = name;

    const controls: HTMLDivElement = document.createElement('div');
    controls.className = 'frost-slider-controls';

    const input: HTMLInputElement = document.createElement('input');
    input.type = 'range';
    input.min = min.toString();
    input.max = max.toString();
    input.value = defaultValue.toString();
    input.step = 'any';

    const percentage: number = ((defaultValue - min) / (max - min)) * 100;
    input.style.setProperty('--slider-value', `${percentage}%`);

    const value: HTMLInputElement = document.createElement('input');
    value.type = 'text';
    value.className = 'frost-slider-value';
    value.value = defaultValue.toString();

    const updateValue = (newValue: number): void => {
        const clampedValue: number = Math.min(Math.max(newValue, min), max);
        input.value = clampedValue.toString();
        value.value = clampedValue.toString();

        const percentage: number = ((clampedValue - min) / (max - min)) * 100;
        input.style.setProperty('--slider-value', `${percentage}%`);

        if (callback) callback(clampedValue);
    };

    input.addEventListener('input', () => {
        updateValue(Number.parseFloat(input.value));
    });

    value.addEventListener('change', () => {
        const newValue = Number.parseFloat(value.value);
        if (Number.isNaN(newValue)) {
            value.classList.add('invalid');
            setTimeout(() => value.classList.remove('invalid'), 400);
            value.value = input.value;
            return;
        }
        updateValue(newValue);
    });

    value.addEventListener('focus', () => value.select());

    controls.appendChild(input);
    controls.appendChild(value);
    container.appendChild(label);
    container.appendChild(controls);

    container.getValue = () => Number.parseFloat(input.value);
    container.setValue = (newValue: number) => updateValue(newValue);

    return container;
}

export { createSlider, type SliderElement };
