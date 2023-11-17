import { Checkbox } from '@/shared/ui/primitives';

import * as S from './LabelledCheckbox.style';
import { LabelledCheckboxProps } from './LabelledCheckbox.types';

export const LabelledCheckbox: React.FC<LabelledCheckboxProps> = ({ error, label, disabled }) => {
    return (
        <S.Root disabled={disabled}>
            <Checkbox disabled={disabled} />
            <S.LabelContent>{label}</S.LabelContent>
            {error && <S.LabelError>{error}</S.LabelError>}
        </S.Root>
    );
};
