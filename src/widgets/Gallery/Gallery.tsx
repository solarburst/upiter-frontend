'use client';

import { useState } from 'react';

import { GalleryCard } from '@/entities';
import { FullscreenGallery } from '@/features/FullscreenGallery/FullscreenGallery';

import * as S from './Gallery.style';

export const Gallery: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(2);

    const gallery = [
        {
            id: 1,
            image: '/storage//products-images/01HFDR4NJJ59E03RAA92MNVGM9.png',
            author_image: '/storage//products-images/01HFDR4NJJ59E03RAA92MNVGM9.png',
            author_name: 'loremipsum',
        },
    ];

    return (
        <S.StyledPageSection titleType="underlined" title="Галерея" subtitle="фотографии наших покупателей">
            <S.Gallery>
                {gallery.map((item, index) => (
                    <GalleryCard
                        src={item.image}
                        author_image={item.author_image}
                        author_name={item.author_name}
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
