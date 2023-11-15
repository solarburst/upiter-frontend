// import { CatalogCardProps } from './CatalogCard.types';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

import { useUuid } from '@/shared/hooks';

import * as S from './CatalogCard.style';
import { CatalogCardProps } from './CatalogCard.types';

export const CatalogCard: React.FC<CatalogCardProps> = ({ images, name, price }) => {
    const paginationId = useUuid();

    return (
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
                        <SwiperSlide key={item.src}>
                            <S.CatalogImage src={item.src} width={282} height={440} alt={''} />
                        </SwiperSlide>
                    ))}
                    <S.SwiperPagination id={paginationId} />
                </ReactSwiper>
            </S.Slider>
            <S.Name>{name}</S.Name>
            <S.Price>{price}</S.Price>
        </S.Root>
    );
};
