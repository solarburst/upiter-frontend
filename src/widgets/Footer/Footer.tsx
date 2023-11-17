'use client';

import { useIsTablet, usePaths } from '@/shared/hooks';
import { ChildrenProps } from '@/shared/types';
import { Container, UpiterLargeLogo, UpiterSmallLogo } from '@/shared/ui';

import * as S from './Footer.style';

export const Footer: React.FC<ChildrenProps> = ({ children }) => {
    const paths = usePaths();

    const navItems = [
        {
            value: 'Главная',
            href: `${paths.main}`,
        },
        {
            value: 'Каталог',
            href: `${paths.catalog}`,
        },
    ];

    const isTablet = useIsTablet();

    return (
        <S.Root>
            {children}
            <Container>
                <S.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip erepreh. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa{' '}
                </S.Text>
                <S.Wrapper isTablet={isTablet}>
                    {isTablet ? <UpiterSmallLogo /> : <UpiterLargeLogo />}
                    <S.Navigation isTablet={isTablet} items={navItems} />
                    <S.FooterSocials isTablet={isTablet} />
                </S.Wrapper>
            </Container>
        </S.Root>
    );
};
