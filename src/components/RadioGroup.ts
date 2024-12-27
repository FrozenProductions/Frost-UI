interface RadioGroupElement extends HTMLDivElement {
    getValue: () => string;
    setValue: (value: string) => void;
}

type RadioCallback = (value: string) => void;

function createRadioGroup(
    name: string, 
    options: string[] = [], 
    defaultValue?: string,
    callback?: RadioCallback
): RadioGroupElement {
    const container = document.createElement('div') as RadioGroupElement;
    container.className = 'fcp-radio-group';
    
    const label: HTMLDivElement = document.createElement('div');
    label.className = 'fcp-radio-label';
    label.textContent = name;
    
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'fcp-radio-options';
    
    const optionsArray: string[] = Array.isArray(options) ? options : [options];
    let currentValue: string = defaultValue || optionsArray[0];
    
    optionsArray.forEach((option: string) => {
        const radioButton: HTMLButtonElement = document.createElement('button');
        radioButton.className = 'fcp-radio-option';
        if (option === currentValue) {
            radioButton.classList.add('active');
        }
        
        const radioIcon: HTMLDivElement = document.createElement('div');
        radioIcon.className = 'fcp-radio-icon';
        
        const ripple: HTMLDivElement = document.createElement('div');
        ripple.className = 'fcp-radio-ripple';
        
        const radioText: HTMLSpanElement = document.createElement('span');
        radioText.className = 'fcp-radio-text';
        radioText.textContent = option;
        
        radioIcon.appendChild(ripple);
        radioButton.appendChild(radioIcon);
        radioButton.appendChild(radioText);
        
        radioButton.addEventListener('click', () => {
            if (currentValue === option) return;
            
            optionsContainer.querySelectorAll('.fcp-radio-option').forEach((btn: Element) => {
                btn.classList.remove('active');
            });
            
            radioButton.classList.add('active');
            currentValue = option;
            
            ripple.style.animation = 'none';
            requestAnimationFrame(() => {
                ripple.style.animation = 'radioRipple 0.4s ease-out';
            });
            
            if (callback) callback(option);
        });
        
        optionsContainer.appendChild(radioButton);
    });
    
    container.appendChild(label);
    container.appendChild(optionsContainer);
    
    container.getValue = () => currentValue;
    container.setValue = (value: string) => {
        if (optionsArray.includes(value)) {
            currentValue = value;
            optionsContainer.querySelectorAll('.fcp-radio-option').forEach((btn: Element) => {
                btn.classList.remove('active');
                if (btn.querySelector('.fcp-radio-text')?.textContent === value) {
                    btn.classList.add('active');
                }
            });
            if (callback) callback(value);
        }
    };
    
    return container;
} 

export { createRadioGroup, RadioGroupElement };