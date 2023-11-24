'use client';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import React, { useEffect, useRef, useState } from 'react';
import { FreeMode, Scrollbar, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as ISwiper } from 'swiper/types';

import { useUuid } from '@/shared/hooks';
import { getImageUrl } from '@/shared/lib';
import { CloseIcon } from '@/shared/ui';

import * as S from './FullscreenGallery.style';

interface ProductImagesProps {
    images: string[];
    activeIndex: number;
    open?: boolean;
    onClose?: () => void;
}

export const FullscreenGallery: React.FC<ProductImagesProps> = ({ images, activeIndex, open, onClose }) => {
    const swiperRef = useRef<{ swiper: ISwiper } | null>(null);
    const thumbsRef = useRef<{ swiper: ISwiper } | null>(null);
    const keyPrefix = useUuid('key');
    const swiperScrollbarId = useUuid('id');
    const swiperThumbsId = useUuid('id');
    const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper | null>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (swiperRef.current && thumbsRef.current && open) {
            swiperRef.current.swiper.activeIndex = activeIndex;
        }
        setIndex(activeIndex);
    }, [activeIndex, open]);

    useEffect(() => {
        if (typeof window !== undefined) {
            const originalOverflowY = document.body.style.overflowY;

            document.body.style.overflowY = open ? 'hidden' : 'scroll';

            return () => {
                document.body.style.overflowY = originalOverflowY;
            };
        }
    }, [open]);

    return (
        <S.Root open={open}>
            <S.GalleryHeader>
                <S.Counter>{`${index + 1} из ${images.length}`}</S.Counter>
                <S.CloseButton onClick={onClose}>
                    <CloseIcon />
                </S.CloseButton>
            </S.GalleryHeader>
            <S.SwiperThumbs>
                <Swiper
                    ref={thumbsRef}
                    direction="vertical"
                    onSwiper={setThumbsSwiper}
                    slidesPerView="auto"
                    spaceBetween={8}
                    watchSlidesProgress
                    modules={[FreeMode, Thumbs, Scrollbar]}
                    freeMode
                    scrollbar={{
                        el: `#${swiperThumbsId}`,
                        draggable: true,
                    }}
                >
                    {images.map((image) => (
                        <SwiperSlide key={`${keyPrefix}-${image}`}>
                            <S.SwiperThumb src={getImageUrl(image)} alt="" width={70} height={90} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.SwiperThumbs>

            <S.SwiperWrapper>
                <Swiper
                    onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
                    ref={swiperRef}
                    centeredSlides
                    direction="vertical"
                    slidesPerView={1}
                    modules={[Thumbs, Scrollbar]}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    spaceBetween={12}
                    mousewheel={{ releaseOnEdges: true }}
                    scrollbar={{
                        el: `#${swiperScrollbarId}`,
                        draggable: true,
                    }}
                >
                    {images.map((image) => (
                        <SwiperSlide key={`${keyPrefix}-${image}`}>
                            <S.SwiperImage src={getImageUrl(image)} alt="" width={720} height={900} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.SwiperWrapper>
            <S.Scrollbar id={swiperScrollbarId} />
        </S.Root>
    );
};
