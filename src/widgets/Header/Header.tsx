'use client';

import { useState } from 'react';

import { useIsTablet } from '@/shared/hooks';
import { useIsMobile } from '@/shared/hooks/useIsMobile';
import { CloseIcon, Container, MenuIcon, UpiterLargeLogo, UpiterSmallLogo } from '@/shared/ui';

import * as S from './Header.style';
// import { HeaderOption, HeaderProps } from './Header.types';

export const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const isTablet = useIsTablet();
    const isMobile = useIsMobile();

    return (
        <S.Root isMobile={isMobile} isModalOpen={isModalOpen}>
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
                        {isTablet ? <UpiterSmallLogo /> : <UpiterLargeLogo />}
                    </S.Icons>
                    {!isTablet && <S.Navigation items={navItems} />}
                    <S.Actions isTablet={isTablet} languages={languages} />
                </S.Wrapper>
            </Container>
            <S.Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} navItems={navItems} languages={languages} />
        </S.Root>
    );
};
