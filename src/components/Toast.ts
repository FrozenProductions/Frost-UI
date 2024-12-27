import icons from '../icons/index';

interface ToastOptions {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    variant?: 'default' | 'action';
    action?: {
        text: string;
        onClick: () => void;
        type?: 'primary' | 'destructive';
    };
}

interface ToastElement extends HTMLDivElement {
    close: () => void;
}

function createToast(options: ToastOptions): ToastElement {
    const toast = document.createElement('div') as ToastElement;
    const validTypes: string[] = ['success', 'error', 'info', 'warning'];
    const type = validTypes.includes(options.type || '') ? options.type || 'info' : 'undefined';
    
    toast.className = `frost-toast ${type} ${options.variant || 'default'}`;
    
    const icon: HTMLSpanElement = document.createElement('span');
    icon.className = 'frost-toast-icon';
    icon.innerHTML = icons[type];
    
    const content: HTMLDivElement = document.createElement('div');
    content.className = 'frost-toast-content';
    
    const message: HTMLSpanElement = document.createElement('span');
    message.className = 'frost-toast-message';
    message.textContent = options.message;

    content.appendChild(message);
    
    if (options.variant === 'action' && options.action) {
        const actionBtn: HTMLButtonElement = document.createElement('button');
        actionBtn.className = `frost-toast-action ${options.action.type || ''}`;
        actionBtn.textContent = options.action.text;
        actionBtn.onclick = (e: MouseEvent) => {
            e.stopPropagation();
            options.action?.onClick();
            close();
        };
        content.appendChild(actionBtn);
    }
    
    const closeBtn: HTMLButtonElement = document.createElement('button');
    closeBtn.className = 'frost-toast-close';
    closeBtn.innerHTML = icons.close;
    
    toast.appendChild(icon);
    toast.appendChild(content);
    toast.appendChild(closeBtn);
    
    let timeoutId: number;
    
    const close: () => void = () => {
        toast.classList.add('hide');
        clearTimeout(timeoutId);
        setTimeout(() => {
            toast.remove();
        }, 300);
    };
    
    toast.close = close;
    closeBtn.addEventListener('click', close);
    
    if (options.duration !== 0) {
        timeoutId = window.setTimeout(close, options.duration || 3000);
        
        toast.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
        });
        
        toast.addEventListener('mouseleave', () => {
            timeoutId = window.setTimeout(close, 1000);
        });
    }
    
    return toast;
}

export { createToast, ToastOptions, ToastElement }; 