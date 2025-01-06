import type Menu from "../../../Menu";
import type { CategoryData } from "./Category";

interface SearchResult {
    text: string;
    path: string[];
    element: HTMLElement;
    type: "category" | "item";
    category?: CategoryData;
    menu: Menu;
    menuName: string;
}

export type { SearchResult };
