'use client';

import { useIsTablet } from '@/shared/hooks';
import { Container, UpiterLargeLogo, UpiterSmallLogo } from '@/shared/ui';

import * as S from './Footer.style';
// import { FooterOption, FooterProps } from './Footer.types';

export const Footer: React.FC = () => {
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

    const isTablet = useIsTablet();

    return (
        <S.Root>
            <Container>
                <S.Wrapper isTablet={isTablet}>
                    {isTablet ? <UpiterSmallLogo /> : <UpiterLargeLogo />}
                    <S.Navigation isTablet={isTablet} items={navItems} />
                    <S.FooterSocials isTablet={isTablet} />
                </S.Wrapper>
            </Container>
        </S.Root>
    );
};
