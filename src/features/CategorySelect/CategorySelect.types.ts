export interface Category {
    href?: string;
    children?: React.ReactNode;
    selected?: boolean;
    id: number;
    name: string;
}

export interface CategorySelectProps {
    categories: Category[];
    onSelectCategory: (value: number) => void;
}
