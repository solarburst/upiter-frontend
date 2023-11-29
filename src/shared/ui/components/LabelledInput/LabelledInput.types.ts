import { InputProps } from '@/shared/ui';

export interface LabelProps {
    disabled?: boolean;
    label?: React.ReactNode;
    error?: React.ReactNode | string;
    required?: boolean;
}

export type LabelledInputProps = Omit<InputProps, 'invalid'> & LabelProps;
