interface SwitchElement extends HTMLDivElement {
    getValue: () => boolean;
    setValue: (value: boolean) => void;
}

type SwitchVariant = "default" | "slim" | "pill" | "ios";
type SwitchCallback = (enabled: boolean) => void;

function createSwitch(
    name: string,
    defaultValue: boolean = false,
    callback?: SwitchCallback,
    variant: SwitchVariant = "default"
): SwitchElement {
    const container = document.createElement("div") as SwitchElement;
    container.className = `frost-switch-container ${variant}`;

    const label: HTMLSpanElement = document.createElement("span");
    label.className = "frost-switch-label";
    label.textContent = name;

    const switchTrack: HTMLDivElement = document.createElement("div");
    switchTrack.className = "frost-switch-track";
    if (defaultValue) switchTrack.classList.add("active");

    const switchThumb: HTMLDivElement = document.createElement("div");
    switchThumb.className = "frost-switch-thumb";

    const rippleContainer: HTMLDivElement = document.createElement("div");
    rippleContainer.className = "frost-switch-ripple";

    let isActive = defaultValue;

    const createRipple = (e: MouseEvent) => {
        const ripple: HTMLDivElement = document.createElement("div");
        ripple.className = "ripple";

        const rect = switchThumb.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size * 2}px`;

        ripple.style.left = `${e.clientX - rect.left - size}px`;
        ripple.style.top = `${e.clientY - rect.top - size}px`;

        rippleContainer.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    };

    const toggleSwitch = (e: MouseEvent) => {
        isActive = !isActive;
        switchTrack.classList.toggle("active", isActive);
        createRipple(e);
        if (callback) callback(isActive);
    };

    switchThumb.appendChild(rippleContainer);
    switchTrack.appendChild(switchThumb);
    container.appendChild(label);
    container.appendChild(switchTrack);

    container.addEventListener("click", toggleSwitch);

    container.getValue = () => isActive;
    container.setValue = (value: boolean) => {
        isActive = value;
        switchTrack.classList.toggle("active", isActive);
        if (callback) callback(isActive);
    };

    return container;
}

export { createSwitch, SwitchElement, SwitchVariant };
