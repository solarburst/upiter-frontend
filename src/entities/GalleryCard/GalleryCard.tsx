'use client';

import { useIsMobile, usePaths } from '@/shared/hooks';

import * as S from './GalleryCard.style';
import { GalleryCardProps } from './GalleryCard.types';

export const GalleryCard: React.FC<GalleryCardProps> = ({ src, author_image, author_name, handleOnClick }) => {
    const isMobile = useIsMobile();
    const paths = usePaths();

    return (
        <S.Root>
            <S.Background src={src} width={isMobile ? 280 : 384} height={isMobile ? 280 : 384} alt={''} onClick={handleOnClick} />
            <S.InstagramLink href={paths.socials.instagram + author_name}>
                <S.Content>
                    <S.AuthorImage src={author_image} width={56} height={56} alt={''} />
                    <S.Text>{author_name}</S.Text>
                </S.Content>
            </S.InstagramLink>
        </S.Root>
    );
};
