export interface DropdownOption {
    value: string;
    label: React.ReactNode;
    id: number;
    locale?: string;
    href?: string;
}

export interface DropdownProps {
    options: DropdownOption[];
    value?: string;
    onChange?: (option: DropdownOption) => void;
    trigger?: React.ReactNode;
    position?: 'left' | 'right';
    disabled?: boolean;
}
