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
    container.className = 'fcp-button-container';
    
    const button = document.createElement('button');
    button.className = `fcp-button ${variant}`;
    button.textContent = name;
    
    let enabled = true;
    
    button.addEventListener('click', (e: MouseEvent) => {
        if (!enabled) return;
        
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('div');
        ripple.className = 'fcp-button-ripple';
        
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