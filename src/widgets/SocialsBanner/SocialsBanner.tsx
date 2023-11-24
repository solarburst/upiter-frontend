'use client';

import { useState } from 'react';

import { usePaths } from '@/shared/hooks';
import { CloseIcon, SocialsBannerIcon, TelegramIcon, WhatsAppIcon } from '@/shared/ui';

import * as S from './SocialsBanner.style';

export const SocialsBanner: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const paths = usePaths();

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <S.Root>
            <S.SocialLink href={paths.socials.whatsapp} open={isOpen} background="whatsapp">
                <WhatsAppIcon />
            </S.SocialLink>
            <S.SocialLink href={paths.socials.telegram} open={isOpen} background="telegram">
                <TelegramIcon />
            </S.SocialLink>
            <S.SocialsButton onClick={handleClick}>
                <S.OpenIcon open={isOpen}>
                    <SocialsBannerIcon />
                </S.OpenIcon>
                <S.CloseIcon open={isOpen}>
                    <CloseIcon />
                </S.CloseIcon>
            </S.SocialsButton>
        </S.Root>
    );
};
