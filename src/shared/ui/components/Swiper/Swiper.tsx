import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as ReactSwiper } from 'swiper/react';

import { useUuid } from '@/shared/hooks';
import { ArrowDownLineIcon } from '@/shared/ui';

import * as S from './Swiper.style';

interface SwiperProps {
    children: React.ReactNode;
}

export const Swiper: React.FC<SwiperProps> = ({ children }) => {
    const prevButtonId = useUuid();
    const nextButtonId = useUuid();
    const paginationId = useUuid();

    return (
        <S.Root>
            <ReactSwiper
                spaceBetween={8}
                slidesPerView="auto"
                modules={[Navigation, Pagination]}
                breakpoints={{
                    768: {
                        spaceBetween: 24,
                    },
                }}
                pagination={{ clickable: true, el: `#${paginationId}` }}
                navigation={{ prevEl: `#${prevButtonId}`, nextEl: `#${nextButtonId}` }}
            >
                {children}
            </ReactSwiper>
            <S.SwiperButton id={prevButtonId} position="left">
                <ArrowDownLineIcon />
            </S.SwiperButton>
            <S.SwiperButton id={nextButtonId} position="right">
                <ArrowDownLineIcon />
            </S.SwiperButton>
            <S.SwiperPagination id={paginationId} />
        </S.Root>
    );
};
