export interface HeaderNavItem {
    href: string;
    children?: React.ReactNode;
    selected?: boolean;
    value: string;
}

export interface HeaderNavProps {
    items: HeaderNavItem[];
}
