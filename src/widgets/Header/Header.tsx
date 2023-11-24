'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { useIsMobile, useIsTablet, usePaths, useScroll } from '@/shared/hooks';
import { CloseIcon, Container, MenuIcon, UpiterLargeLogo, UpiterSmallLogo } from '@/shared/ui';

import * as S from './Header.style';

export const Header: React.FC = () => {
    const t = useTranslations('Common');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const paths = usePaths();

    const languages = [
        {
            label: <span>Русский</span>,
            value: 'Русский',
            id: 1,
            locale: 'ru',
        },
        {
            label: <span>English</span>,
            value: 'English',
            id: 2,
            locale: 'en',
        },
    ];

    const navItems = [
        {
            value: t('paths.main'),
            href: `${paths.main}`,
        },
        {
            value: t('paths.catalog'),
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
