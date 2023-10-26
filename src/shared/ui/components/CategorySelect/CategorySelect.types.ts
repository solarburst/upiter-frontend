export interface Category {
    href?: string;
    children?: React.ReactNode;
    selected?: boolean;
    value: string;
}

export interface CategorySelectProps {
    categories: Category[];
    value?: string;
}
