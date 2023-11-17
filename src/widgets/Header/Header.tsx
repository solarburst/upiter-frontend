'use client';

import { useState } from 'react';

import { useIsMobile, useIsTablet, usePaths, useScroll } from '@/shared/hooks';
import { CloseIcon, Container, MenuIcon, UpiterLargeLogo, UpiterSmallLogo } from '@/shared/ui';

import * as S from './Header.style';

export const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const paths = usePaths();

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
            href: `${paths.main}`,
        },
        {
            value: 'Каталог',
            href: `${paths.catalog}`,
        },
    ];

    const isTablet = useIsTablet();
    const isMobile = useIsMobile();

    const scrollY = useScroll();

    return (
        <S.Root isMobile={isMobile} isModalOpen={isModalOpen} sticky={scrollY > 64}>
            <Container>
                <S.Wrapper>
                    <S.Icons>
                        {isTablet && !isMobile && (
                            <S.Menu onClick={() => setIsModalOpen(true)}>
                                <MenuIcon />
                            </S.Menu>
                        )}
                        {isMobile && !isModalOpen && (
                            <S.Menu onClick={() => setIsModalOpen(true)}>
                                <MenuIcon />
                            </S.Menu>
                        )}
                        {isMobile && isModalOpen && (
                            <S.Menu onClick={() => setIsModalOpen(false)}>
                                <CloseIcon />
                            </S.Menu>
                        )}
                        {isTablet ? (
                            <S.Menu href={paths.main}>
                                <UpiterSmallLogo />
                            </S.Menu>
                        ) : (
                            <S.Menu href={paths.main}>
                                <UpiterLargeLogo />
                            </S.Menu>
                        )}
                    </S.Icons>
                    {!isTablet && <S.Navigation items={navItems} />}
                    <S.Actions isTablet={isTablet} languages={languages} />
                </S.Wrapper>
            </Container>
            <S.Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} navItems={navItems} languages={languages} />
        </S.Root>
    );
};
