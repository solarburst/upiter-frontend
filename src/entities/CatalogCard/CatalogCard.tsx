// import { CatalogCardProps } from './CatalogCard.types';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

import { useIsMobile, useUuid } from '@/shared/hooks';

import * as S from './CatalogCard.style';
import { CatalogCardProps } from './CatalogCard.types';

export const CatalogCard: React.FC<CatalogCardProps> = ({ images, name, price }) => {
    const paginationId = useUuid();

    const isMobile = useIsMobile();

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
                    style={{ maxWidth: isMobile ? '160px' : '282px', maxHeight: isMobile ? '250px' : '440px' }}
                >
                    {images.map((item) => (
                        <SwiperSlide key={item.src}>
                            <S.CatalogImage src={item.src} width={isMobile ? 160 : 282} height={isMobile ? 250 : 440} alt={''} />
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
