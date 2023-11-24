import { InputProps } from '@/shared/ui';

export interface LabelProps {
    disabled?: boolean;
    label?: React.ReactNode;
    error?: React.ReactNode | string;
}

export type LabelledInputProps = Omit<InputProps, 'invalid'> & LabelProps;
