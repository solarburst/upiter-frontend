export interface Size {
    children?: React.ReactNode;
    selected?: boolean;
    value: string;
}

export interface SizeSelectProps {
    sizes: Size[];
    value?: string;
}
