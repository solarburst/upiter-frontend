import { CheckMarkIcon } from '@/shared/ui';

import * as S from './Checkbox.style';

export const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <S.Root>
            <input {...props} type="checkbox" />
            <span>
                <CheckMarkIcon />
            </span>
        </S.Root>
    );
};
