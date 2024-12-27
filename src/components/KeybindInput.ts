interface KeybindInputElement extends HTMLDivElement {
    getValue: () => string | null;
    setValue: (value: string | null) => void;
}

type KeybindCallback = (key: string | null) => void;

function createKeybindInput(
    currentKey?: string,
    callback?: KeybindCallback
): KeybindInputElement {
    const keybindInput = document.createElement('div') as KeybindInputElement;
    keybindInput.className = 'frost-keybind';
    
    const keyDisplay: HTMLSpanElement = document.createElement('span');
    keyDisplay.className = 'frost-keybind-display';
    keyDisplay.textContent = currentKey || 'None';
    
    const clearButton: HTMLButtonElement = document.createElement('button');
    clearButton.className = 'frost-keybind-clear';
    clearButton.textContent = '×';
    clearButton.style.display = currentKey ? 'block' : 'none';
    
    keybindInput.appendChild(keyDisplay);
    keybindInput.appendChild(clearButton);
    
    let isBinding = false;
    
    keybindInput.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === clearButton) {
            keyDisplay.textContent = 'None';
            clearButton.style.display = 'none';
            if (callback) callback(null);
            return;
        }
        
        if (!isBinding) {
            isBinding = true;
            keyDisplay.textContent = 'Press key...';
            keybindInput.classList.add('binding');
        }
    });
    
    document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (!isBinding) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const key: string = e.code;
        keyDisplay.textContent = key;
        clearButton.style.display = 'block';
        isBinding = false;
        keybindInput.classList.remove('binding');
        
        if (callback) callback(key);
    }, true);
    
    keybindInput.getValue = () => keyDisplay.textContent === 'None' ? null : keyDisplay.textContent;
    keybindInput.setValue = (value: string | null) => {
        keyDisplay.textContent = value || 'None';
        clearButton.style.display = value ? 'block' : 'none';
        if (callback) callback(value);
    };
    
    return keybindInput;
} 

export { createKeybindInput, KeybindInputElement };