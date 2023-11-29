'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import Image from 'next/image';
import { useState } from 'react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/types';

import { useIsMobile, useUuid } from '@/shared/hooks';
import { getImageUrl } from '@/shared/lib';
import { ArrowDownLineIcon } from '@/shared/ui';

import * as S from './DetailsSwiper.style';

interface DetailsSwiperProps {
    images: string[];
}

export const DetailsSwiper: React.FC<DetailsSwiperProps> = ({ images, ...props }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

    const prevButtonId = useUuid();
    const nextButtonId = useUuid();
    const paginationId = useUuid();

    const isMobile = useIsMobile();

    return (
        <S.Root>
            {isMobile && (
                <>
                    <ReactSwiper
                        slidesPerView={1}
                        modules={[Pagination]}
                        centeredSlides={true}
                        pagination={{ clickable: true, el: `#${paginationId}` }}
                        {...props}
                    >
                        {images?.map((item) => (
                            <SwiperSlide key={`slider-slide-${item}`}>
                                <Image src={getImageUrl(item)} key={item} width={620} height={820} alt={''} />
                            </SwiperSlide>
                        ))}
                    </ReactSwiper>
                    <S.SwiperPagination id={paginationId} />
                </>
            )}
            {!isMobile && (
                <>
                    <ReactSwiper
                        slidesPerView={'auto'}
                        modules={[Navigation, Thumbs]}
                        navigation={{ prevEl: `#${prevButtonId}`, nextEl: `#${nextButtonId}` }}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        {...props}
                    >
                        {images?.map((item) => (
                            <SwiperSlide key={`slider-slide-${item}`}>
                                <Image src={getImageUrl(item)} key={item} width={620} height={820} alt={''} />
                            </SwiperSlide>
                        ))}
                        <S.SwiperButton id={prevButtonId} position="left">
                            <ArrowDownLineIcon />
                        </S.SwiperButton>
                        <S.SwiperButton id={nextButtonId} position="right">
                            <ArrowDownLineIcon />
                        </S.SwiperButton>
                    </ReactSwiper>

                    <ReactSwiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={8}
                        slidesPerView={'auto'}
                        modules={[Navigation, Thumbs]}
                        className="thumbs-swiper"
                    >
                        {images?.map((item) => (
                            <SwiperSlide key={`slider-thumb-${item}`}>
                                <Image src={getImageUrl(item)} key={item} width={70} height={90} alt={''} />
                            </SwiperSlide>
                        ))}
                    </ReactSwiper>
                </>
            )}
        </S.Root>
    );
};
