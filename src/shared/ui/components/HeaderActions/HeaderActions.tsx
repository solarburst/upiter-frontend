import React from 'react';

import { CartIcon, ProfileIcon } from '@/shared/ui';

import * as S from './HeaderActions.style';
import { HeaderActionsProps } from './HeaderActions.types';

export const HeaderActions: React.FC<HeaderActionsProps> = ({ languages }) => {
    return (
        <S.Root>
            <S.LanguageSelect options={languages} value={languages[0].value} />
            <S.ActionsSeparator />
            <S.ActionButton>
                <ProfileIcon />
                Войти
            </S.ActionButton>
            <S.ActionsSeparator />
            <S.ActionButton>
                <CartIcon />
                Корзина
            </S.ActionButton>
        </S.Root>
    );
};

export default HeaderActions;
