import { createButton } from '../../index';
import type { ModalElement, ModalOptions, ModalResult } from '../../../types/index';

function createModal(options: ModalOptions): ModalElement {
    const backdrop = document.createElement('div') as ModalElement;
    backdrop.className = 'frost-modal-backdrop';

    const dim = options.dim !== false;
    const blur = options.blur !== false;

    if (!dim) {
        backdrop.style.background = 'transparent';
    } else {
        backdrop.style.background = 'rgba(0, 0, 0, 0.6)';
    }

    if (!blur) {
        backdrop.style.backdropFilter = 'none';
    } else {
        backdrop.style.backdropFilter = 'blur(4px)';
    }

    const closeMethods = options.closeOn || ['any'];

    const canCloseOn = (method: string): boolean => {
        if (closeMethods.includes('any')) return true;
        return closeMethods.includes(method as any);
    };

    const modal = document.createElement('div');
    modal.className = 'frost-modal';

    const title = document.createElement('div');
    title.className = 'frost-modal-title';
    title.textContent = options.title;

    const message = document.createElement('div');
    message.className = 'frost-modal-message';
    message.textContent = options.message;

    modal.appendChild(title);
    modal.appendChild(message);

    let resolvePromise: (result: ModalResult) => void;
    const promise = new Promise<ModalResult>((resolve) => {
        resolvePromise = resolve;
    });

    const close = (result?: string): void => {
        backdrop.classList.add('frost-modal-hide');
        setTimeout(() => {
            backdrop.remove();
        }, 300);
        resolvePromise(result ?? null);
    };

    backdrop.close = close;

    if (options.buttons && options.buttons.length > 0) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'frost-modal-buttons';

        options.buttons.forEach((buttonConfig) => {
            const buttonElement = createButton(
                buttonConfig.text,
                () => {
                    close(buttonConfig.result ?? buttonConfig.text);
                },
                buttonConfig.variant
            );
            buttonContainer.appendChild(buttonElement);
        });

        modal.appendChild(buttonContainer);
    }

    backdrop.appendChild(modal);

    if (canCloseOn('backdrop')) {
        backdrop.addEventListener('click', (e: MouseEvent) => {
            if (e.target === backdrop) {
                close();
            }
        });
    }

    if (canCloseOn('escape')) {
        const escapeHandler = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                close();
                window.removeEventListener('keydown', escapeHandler);
            }
        };
        window.addEventListener('keydown', escapeHandler);
    }

    (backdrop as any).promise = promise;

    return backdrop;
}

export { createModal };
