'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import Link from 'next/link';
import { Pagination } from 'swiper/modules';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

import { useAppSelector, usePaths, useUuid } from '@/shared/hooks';
import { useCurrency } from '@/shared/hooks';
import { getImageUrl } from '@/shared/lib';

import * as S from './CatalogCard.style';
import { CatalogCardProps } from './CatalogCard.types';

export const CatalogCard: React.FC<CatalogCardProps> = ({ slug, images, name, prices }) => {
    const selectedCurrency = useAppSelector<number>((state) => state.settings.selectedCurrency);
    const paginationId = useUuid();
    const paths = usePaths();
    const price = useCurrency(prices, selectedCurrency);

    const empty = images.length === 0;

    return (
        <Link href={paths.product(slug)}>
            <S.Root empty={empty}>
                {images.length > 0 ? (
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
                                    <S.CatalogImage src={getImageUrl(item)} width={282} height={440} alt={''} empty={empty} />
                                </SwiperSlide>
                            ))}
                            <S.SwiperPagination id={paginationId} />
                        </ReactSwiper>
                    </S.Slider>
                ) : (
                    <S.NoImg>
                        <S.CatalogImage src={'/images/no-img.svg'} width={282} height={440} alt={''} empty={empty} />
                    </S.NoImg>
                )}
                <S.Name>{name}</S.Name>
                <S.Price>{price}</S.Price>
            </S.Root>
        </Link>
    );
};
