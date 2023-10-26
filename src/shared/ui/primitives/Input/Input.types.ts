export interface StyledInputProps {
    stretch?: boolean;
    multiline?: boolean;
    invalid?: boolean;
    disabled?: boolean;
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & StyledInputProps;
