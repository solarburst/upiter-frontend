import { useState } from 'react';

import { usePaths } from '@/shared/hooks';

import * as S from './CookieBanner.style';

export const CookieBanner: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const paths = usePaths();

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

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
