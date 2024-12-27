interface ColorInputElement extends HTMLDivElement {
    getValue: () => string;
    setValue: (value: string) => void;
}

type ColorCallback = (color: string) => void;

function createColorInput(
    name: string,
    defaultValue: string,
    callback?: ColorCallback
): ColorInputElement {
    const container = document.createElement('div') as ColorInputElement;
    container.className = 'fcp-color-input';
    
    const leftSide: HTMLDivElement = document.createElement('div');
    leftSide.className = 'fcp-color-left';
    
    const label: HTMLSpanElement = document.createElement('span');
    label.textContent = name;
    
    const preview: HTMLDivElement = document.createElement('div');
    preview.className = 'fcp-color-preview';
    preview.style.backgroundColor = defaultValue;
    
    const picker: HTMLInputElement = document.createElement('input');
    picker.type = 'color';
    picker.className = 'fcp-color-picker';
    picker.value = defaultValue;
    
    preview.addEventListener('click', (e: MouseEvent) => {
        e.stopPropagation();
        picker.click();
    });
    
    picker.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        const color: string = target.value;
        preview.style.backgroundColor = color;
        if (callback) callback(color);
    });
    
    preview.appendChild(picker);
    leftSide.appendChild(label);
    container.appendChild(leftSide);
    container.appendChild(preview);
    
    container.getValue = () => picker.value;
    container.setValue = (value: string) => {
        if (/^#[0-9A-F]{6}$/i.test(value)) {
            picker.value = value;
            preview.style.backgroundColor = value;
            if (callback) callback(value);
        }
    };
    
    return container;
} 

export { createColorInput, ColorInputElement };