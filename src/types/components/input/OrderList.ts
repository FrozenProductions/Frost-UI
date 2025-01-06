interface OrderListElement extends HTMLDivElement {
    getValue: () => string[];
    setValue: (values: string[]) => void;
}

type OrderListCallback = (items: string[]) => void;

export type { OrderListElement, OrderListCallback };
