import { createKeybindInput } from './KeybindInput';

interface ToggleElement extends HTMLDivElement {
    toggleState: () => void;
    getValue: () => boolean;
    setValue: (value: boolean) => void;
}

type ToggleCallback = (enabled: boolean, key: string) => void;

function createToggle(
    name: string, 
    menuId: string,
    category: string,
    callback?: ToggleCallback,
    keybind?: string
): ToggleElement {
    const toggle: ToggleElement = document.createElement('div') as ToggleElement;
    toggle.className = 'frost-toggle';
    let isActive: boolean = false;
    
    const leftSide: HTMLDivElement = document.createElement('div');
    leftSide.className = 'frost-toggle-left';
    
    const label: HTMLSpanElement = document.createElement('span');
    label.textContent = name;
    
    leftSide.appendChild(label);
    
    const rightSide: HTMLDivElement = document.createElement('div');
    rightSide.className = 'frost-toggle-right';
    
    toggle.toggleState = () => {
        isActive = !isActive;
        toggle.classList.toggle('active', isActive);
        const currentKey = keybindInput.querySelector('.frost-keybind-display')?.textContent || '';
        if (callback) callback(isActive, currentKey);
    };
    
    const keybindInput: HTMLDivElement = createKeybindInput(keybind, (newKey: string | null) => {
        window.frostManager.updateKeybind(menuId, category, name, newKey || '');
        if (callback) callback(isActive, newKey || '');
    });
    
    setTimeout(() => {
        if (keybind) {
            window.frostManager.updateKeybind(menuId, category, name, keybind);
        }
    }, 0);
    
    rightSide.appendChild(keybindInput);
    
    toggle.appendChild(leftSide);
    toggle.appendChild(rightSide);
    
    toggle.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === toggle || target === leftSide || target === label) {
            isActive = !isActive;
            toggle.classList.toggle('active', isActive);
            const currentKey = keybindInput.querySelector('.frost-keybind-display')?.textContent || '';
            if (callback) callback(isActive, currentKey);
        }
    });
    
    toggle.getValue = () => isActive;
    
    toggle.setValue = (value: boolean) => {
        isActive = value;
        toggle.classList.toggle('active', isActive);
    };
    
    return toggle;
} 

export { createToggle, ToggleElement, ToggleCallback };