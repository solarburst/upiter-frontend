'use client';

import { BannerType } from '@/shared/api/types';
import { useAppSelector } from '@/shared/hooks';
import { getImageUrl } from '@/shared/lib';
import { Container } from '@/shared/ui';

import * as S from './Banner.style';

export const Banner: React.FC = () => {
    const banner = useAppSelector<BannerType | null>((state) => state.banner.banner);

    return (
        <S.Root>
            {banner && (
                <>
                    <S.BackgroundImage src={getImageUrl(banner.image)} width={4096} height={2430} alt="" priority />
                    <Container>
                        <S.ContentWrapper>
                            <S.Content>
                                <S.Heading>{banner.title}</S.Heading>
                                <S.Paragraph>{banner.description}</S.Paragraph>
                                <S.OrderButton href={banner.link.url}>{banner.link.label}</S.OrderButton>
                            </S.Content>
                        </S.ContentWrapper>
                    </Container>
                </>
            )}
        </S.Root>
    );
};
