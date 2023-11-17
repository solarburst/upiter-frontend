import React from 'react';

import { usePaths } from '@/shared/hooks';
import { InstagramColoredIcon, TelegramColoredIcon, TiktokColoredIcon, YoutubeColoredIcon } from '@/shared/ui';

import * as S from './Socials.style';

export const Socials: React.FC = ({ ...props }) => {
    const paths = usePaths();

    return (
        <S.Root {...props}>
            <S.SocialLink href={paths.socials.telegram}>
                <TelegramColoredIcon />
            </S.SocialLink>
            <S.SocialLink href={paths.socials.instagram}>
                <InstagramColoredIcon />
            </S.SocialLink>
            <S.SocialLink href={paths.socials.youtube}>
                <YoutubeColoredIcon />
            </S.SocialLink>
            <S.SocialLink href={paths.socials.tiktok}>
                <TiktokColoredIcon />
            </S.SocialLink>
        </S.Root>
    );
};
