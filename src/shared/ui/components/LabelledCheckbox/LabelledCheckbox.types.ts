export interface LabelProps {
    label?: React.ReactNode;
    error?: React.ReactNode;
    disabled?: boolean;
}

export type LabelledCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & LabelProps;
