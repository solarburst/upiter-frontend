import React from 'react';

import { InstagramColoredIcon, TelegramColoredIcon, TiktokColoredIcon, YoutubeColoredIcon } from '@/shared/ui';

import * as S from './Socials.style';

export const Socials: React.FC = ({ ...props }) => {
    return (
        <S.Root {...props}>
            <S.SocialLink href={'/'}>
                <TelegramColoredIcon />
            </S.SocialLink>
            <S.SocialLink href={'/'}>
                <InstagramColoredIcon />
            </S.SocialLink>
            <S.SocialLink href={'/'}>
                <YoutubeColoredIcon />
            </S.SocialLink>
            <S.SocialLink href={'/'}>
                <TiktokColoredIcon />
            </S.SocialLink>
        </S.Root>
    );
};
