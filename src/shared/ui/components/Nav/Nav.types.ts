export interface NavItem {
    href: string;
    children?: React.ReactNode;
    selected?: boolean;
    value: string;
}

export interface RootProps {
    vertical?: boolean;
}

export interface NavProps {
    items: NavItem[];
    vertical?: boolean;
    handleModal?: () => void;
}
