import { createKeybindInput } from './KeybindInput';

interface ToggleElement extends HTMLDivElement {
    toggleState: () => void;
    getValue: () => boolean;
    setValue: (value: boolean) => void;
}

type ToggleCallback = (enabled: boolean, key: string) => void;

function createToggle(
    name: string, 
    callback?: ToggleCallback,
    keybind?: string
): ToggleElement {
    const toggle = document.createElement('div') as ToggleElement;
    toggle.className = 'fcp-toggle';
    let isActive = false;
    
    const leftSide: HTMLDivElement = document.createElement('div');
    leftSide.className = 'fcp-toggle-left';
    
    const label: HTMLSpanElement = document.createElement('span');
    label.textContent = name;
    
    leftSide.appendChild(label);
    
    const rightSide: HTMLDivElement = document.createElement('div');
    rightSide.className = 'fcp-toggle-right';
    
    const keybindInput: HTMLDivElement = createKeybindInput(keybind, (newKey: string | null) => {
        if (callback && newKey !== keybind) {
            const currentState = toggle.classList.contains('active');
            callback(currentState, newKey || '');
        }
    });
    
    rightSide.appendChild(keybindInput);
    
    toggle.appendChild(leftSide);
    toggle.appendChild(rightSide);
    
    toggle.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === toggle || target === leftSide || target === label) {
            isActive = !isActive;
            toggle.classList.toggle('active', isActive);
            const currentKey = keybindInput.querySelector('.fcp-keybind-display')?.textContent || '';
            if (callback) callback(isActive, currentKey);
        }
    });
    
    toggle.toggleState = () => {
        isActive = !isActive;
        toggle.classList.toggle('active', isActive);
        const currentKey = keybindInput.querySelector('.fcp-keybind-display')?.textContent || '';
        if (callback) callback(isActive, currentKey);
    };
    
    toggle.getValue = () => isActive;
    
    toggle.setValue = (value: boolean) => {
        isActive = value;
        toggle.classList.toggle('active', isActive);
    };
    
    return toggle;
} 

export { createToggle, ToggleElement };