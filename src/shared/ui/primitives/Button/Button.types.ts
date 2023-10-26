export interface StyledButtonProps {
    paddings?: 'small' | 'large';
    stretch?: boolean;
    href?: string;
    children?: React.ReactNode;
    disabled?: boolean;
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & StyledButtonProps;
