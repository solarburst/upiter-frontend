'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { GalleryCard } from '@/entities';
import { FullscreenGallery } from '@/features/FullscreenGallery/FullscreenGallery';
import { GalleryItem } from '@/shared/api/types';
import { useAppSelector } from '@/shared/hooks';

import * as S from './Gallery.style';

export const Gallery: React.FC = () => {
    const t = useTranslations('Main');
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(2);

    const gallery = useAppSelector<GalleryItem[]>((state) => state.gallery.gallery);

    return (
        <S.StyledPageSection titleType="underlined" title={t('gallery.title')} subtitle={t('gallery.subtitle')}>
            <S.Gallery>
                {gallery.map((item, index) => (
                    <GalleryCard
                        src={item.image}
                        author_image={item.instagram_avatar}
                        author_name={item.instagram_name}
                        key={item.id}
                        handleOnClick={() => {
                            setActiveIndex(index);
                            setIsOpen(true);
                        }}
                    />
                ))}
            </S.Gallery>
            <FullscreenGallery
                images={gallery.map((item) => item.image)}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                activeIndex={activeIndex}
            />
        </S.StyledPageSection>
    );
};
