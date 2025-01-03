interface SwitchElement extends HTMLDivElement {
    getValue: () => boolean;
    setValue: (value: boolean) => void;
}

type SwitchVariant = 'default' | 'slim' | 'pill' | 'ios';
type SwitchCallback = (enabled: boolean) => void;

function createSwitch(
    name: string,
    defaultValue = false,
    callback?: SwitchCallback,
    variant: SwitchVariant = 'default'
): SwitchElement {
    const container = document.createElement('div') as SwitchElement;
    container.className = `frost-switch-container ${variant}`;

    const leftSide: HTMLDivElement = document.createElement('div');
    leftSide.className = 'frost-switch-left';

    const label: HTMLSpanElement = document.createElement('span');
    label.className = 'frost-switch-label';
    label.textContent = name;

    leftSide.appendChild(label);

    const rightSide: HTMLDivElement = document.createElement('div');
    rightSide.className = 'frost-switch-right';

    const switchTrack: HTMLDivElement = document.createElement('div');
    switchTrack.className = 'frost-switch-track';
    if (defaultValue) switchTrack.classList.add('active');

    const switchThumb: HTMLDivElement = document.createElement('div');
    switchThumb.className = 'frost-switch-thumb';

    let isActive = defaultValue;

    const toggleSwitch = () => {
        isActive = !isActive;
        switchTrack.classList.toggle('active', isActive);
        if (callback) callback(isActive);
    };

    switchTrack.appendChild(switchThumb);
    rightSide.appendChild(switchTrack);

    container.appendChild(leftSide);
    container.appendChild(rightSide);

    container.addEventListener('click', toggleSwitch);

    container.getValue = () => isActive;
    container.setValue = (value: boolean) => {
        isActive = value;
        switchTrack.classList.toggle('active', isActive);
        if (callback) callback(isActive);
    };

    return container;
}

export { createSwitch, type SwitchElement, type SwitchVariant };
