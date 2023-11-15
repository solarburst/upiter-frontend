'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Root = styled.article`
    cursor: pointer;
    display: flex;
    flex-direction: column;
`;

export const Slider = styled.div`
    position: relative;
    width: 100%;
    max-width: 282px;

    .swiper-slide {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const CatalogImage = styled(Image)`
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
    height: auto;
`;

export const Name = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.text1};
    width: fit-content;
    margin-top: 8px;
`;

export const Price = styled.p`
    font-size: 16px;
    line-height: 26px;
    color: ${({ theme }) => theme.color.text1};
    font-weight: 600;
    width: fit-content;
`;

export const SwiperPagination = styled.div`
    align-self: center;
    display: flex;
    position: absolute;
    z-index: 5;
    gap: 2px;
    padding: 2px;
    bottom: 0 !important;

    .swiper-pagination-bullet {
        position: relative;
        background-color: ${({ theme }) => theme.color.text1};
        cursor: pointer;
        width: 100%;
        height: 3px;
        border-radius: 8px;
        margin: 0 !important;
        bottom: 0 !important;

        &::before {
            content: '';
            position: absolute;
            top: -3px;
            bottom: -3px;
            left: -3px;
            right: -3px;
        }
    }

    .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.color.text1};
    }
`;
