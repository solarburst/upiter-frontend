export interface NavItem {
    href: string;
    children?: React.ReactNode;
    selected?: boolean;
    value: string;
}

export interface NavProps {
    items: NavItem[];
}
