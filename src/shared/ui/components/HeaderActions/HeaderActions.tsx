import React from 'react';

import { CartIcon, ProfileIcon } from '@/shared/ui';

import * as S from './HeaderActions.style';
import { HeaderActionsProps } from './HeaderActions.types';

export const HeaderActions: React.FC<HeaderActionsProps> = ({ isTablet, languages }) => {
    return (
        <S.Root>
            {!isTablet && <S.LanguageSelect options={languages} value={languages[0].value.slice(0, 2)} />}
            {!isTablet && <S.ActionsSeparator />}
            <S.ActionButton>
                <ProfileIcon />
                {!isTablet && 'Войти'}
            </S.ActionButton>
            {!isTablet && <S.ActionsSeparator />}
            <S.ActionButton>
                <CartIcon />
                {!isTablet && 'Корзина'}
            </S.ActionButton>
        </S.Root>
    );
};
