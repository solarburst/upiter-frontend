import { Input } from '@/shared/ui';

import * as S from './LabelledInput.style';
import { LabelledInputProps } from './LabelledInput.types';

export const LabelledInput: React.FC<LabelledInputProps> = ({ label, disabled, error, required, ...props }) => {
    return (
        <S.Root disabled={disabled} error={error}>
            {label && (
                <S.LabelContent>
                    {label}
                    {required && <S.Required>*</S.Required>}
                </S.LabelContent>
            )}
            <Input {...props} invalid={!!error || undefined} disabled={disabled} />
            {error && <S.LabelError>{error}</S.LabelError>}
        </S.Root>
    );
};
