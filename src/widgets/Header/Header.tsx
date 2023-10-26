'use client';

import { useIsMobile } from '@/shared/hooks';
import { Container, UpiterLargeLogo } from '@/shared/ui';

import * as S from './Header.style';
// import { HeaderOption, HeaderProps } from './Header.types';

export const Header: React.FC = () => {
    const languages = [
        {
            label: <span>Русский</span>,
            value: 'Русский',
        },
        {
            label: <span>English</span>,
            value: 'English',
        },
    ];

    const navItems = [
        {
            value: 'Главная',
            href: '/',
        },
        {
            value: 'Qwe',
            href: 'qwe',
        },
    ];

    const isMobile = useIsMobile();
    console.log(isMobile);

    return (
        <S.Root>
            <Container>
                <S.Wrapper>
                    <UpiterLargeLogo />
                    <S.Navigation items={navItems} />
                    <S.Actions languages={languages} />
                </S.Wrapper>
            </Container>
        </S.Root>
    );
};
