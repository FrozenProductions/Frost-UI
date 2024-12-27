interface ButtonElement extends HTMLDivElement {
    setEnabled: (enabled: boolean) => void;
    isEnabled: () => boolean;
}

type ButtonVariant = 'default' | 'primary' | 'destructive';
type ButtonCallback = () => void;

function createButton(
    name: string,
    callback?: ButtonCallback,
    variant: ButtonVariant = 'default'
): ButtonElement {
    const container = document.createElement('div') as ButtonElement;
    container.className = 'frost-button-container';
    
    const button: HTMLButtonElement = document.createElement('button');
    button.className = `frost-button ${variant}`;
    button.textContent = name;
    
    let enabled = true;
    
    button.addEventListener('click', (e: MouseEvent) => {
        if (!enabled) return;
        
        const rect: DOMRect = button.getBoundingClientRect();
        const ripple: HTMLDivElement = document.createElement('div');
        ripple.className = 'frost-button-ripple';
        
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        
        button.appendChild(ripple);
        
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
        
        if (callback) callback();
    });
    
    container.appendChild(button);
    
    container.setEnabled = (value: boolean) => {
        enabled = value;
        button.classList.toggle('disabled', !enabled);
    };
    
    container.isEnabled = () => enabled;
    
    return container;
}

export { createButton, ButtonElement, ButtonVariant }; 