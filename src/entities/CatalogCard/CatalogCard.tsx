'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import Link from 'next/link';
import { Pagination } from 'swiper/modules';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

import { usePaths, useUuid } from '@/shared/hooks';

import * as S from './CatalogCard.style';
import { CatalogCardProps } from './CatalogCard.types';

export const CatalogCard: React.FC<CatalogCardProps> = ({ id, images, name, price }) => {
    const paginationId = useUuid();
    const paths = usePaths();

    return (
        <Link href={paths.product(id)}>
            <S.Root>
                <S.Slider>
                    <ReactSwiper
                        slidesPerView={1}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                            el: `#${paginationId}`,
                        }}
                    >
                        {images.map((item) => (
                            <SwiperSlide key={item}>
                                <S.CatalogImage src={item} width={282} height={440} alt={''} />
                            </SwiperSlide>
                        ))}
                        <S.SwiperPagination id={paginationId} />
                    </ReactSwiper>
                </S.Slider>
                <S.Name>{name}</S.Name>
                <S.Price>{price}</S.Price>
            </S.Root>
        </Link>
    );
};
