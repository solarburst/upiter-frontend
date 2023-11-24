'use client';

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { usePaths } from '@/shared/hooks';

import * as S from './CookieBanner.style';

export const CookieBanner: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const paths = usePaths();

    const handleClick = () => {
        Cookies.set('ALLOW_COOKIES', 'true');
        setIsOpen(false);
    };

    useEffect(() => {
        if (Cookies.get('ALLOW_COOKIES') === 'true') {
            setIsOpen(false);
        }
    }, []);

    return (
        <S.Root isOpen={isOpen}>
            <S.Wrapper>
                <S.Text>
                    Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie.{` `}
                    <S.PrivacyLink href={paths.privacy}>Подробнее</S.PrivacyLink>
                </S.Text>
                <S.AcceptButton onClick={handleClick}>Соглашаюсь</S.AcceptButton>
            </S.Wrapper>
        </S.Root>
    );
};
