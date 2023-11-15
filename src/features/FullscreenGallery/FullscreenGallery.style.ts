'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Root = styled.div<{ open?: boolean }>`
    background-color: ${({ theme }) => theme.color.bg1};
    position: fixed;
    top: ${(props) => (props.open ? '0' : '-120%')};
    bottom: ${(props) => (props.open ? '0' : '120%')};
    transition: ${({ theme }) => theme.transition.default};
    left: 0;
    right: 0;
    z-index: 10;
    overflow: hidden;

    display: grid;
    grid-template-columns: 90px minmax(0, 1184px);
    gap: 24px;
    padding: 32px;

    @media screen and (max-width: 768px) {
        grid-template-columns: none;
        padding: 50px 0;
    }
`;

export const GalleryHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;

    @media screen and (max-width: 768px) {
        padding: 16px;
    }
`;

export const Counter = styled.span`
    display: block;

    @media screen and (${({ theme }) => theme.media.fromTablet}) {
        display: none;
    }
`;

export const CloseButton = styled.button`
    border: 0;
    font-size: inherit;
    display: flex;
    border: none;
    color: inherit;
    background-color: transparent;
    margin-left: auto;
    cursor: pointer;

    svg {
        width: 48px;
        height: 48px;
    }

    @media screen and (max-width: 768px) {
        svg {
            width: 24px;
            height: 24px;
        }
    }
`;

export const SwiperThumbs = styled.div`
    display: grid;
    overflow: hidden;
    position: relative;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        transition: ${({ theme }) => theme.transition.default};
        height: fit-content;
    }

    @media screen and (${({ theme }) => theme.media.toTablet}) {
        display: none;
    }
`;

export const SwiperThumb = styled(Image)`
    width: 84px;
    height: 100%;
    cursor: pointer;

    object-fit: contain;
`;

export const SwiperWrapper = styled.div`
    display: grid;
    overflow: hidden;
    position: relative;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        height: fit-content;
    }
`;

export const SwiperImage = styled(Image)`
    width: 100%;
    height: 100%;

    object-fit: contain;
`;

export const Scrollbar = styled.div`
    position: absolute;
    overflow: hidden;
    top: 60px;
    bottom: 10px;
    right: 0;
    width: 6px;
    z-index: 20;
    border-radius: 4px;

    background-color: ${({ theme }) => theme.color.accent4}30;
    transition: ${({ theme }) => theme.transition.default};

    .swiper-scrollbar-drag {
        background-color: ${({ theme }) => theme.color.accent5};
        transition: ${({ theme }) => theme.transition.default};
        cursor: pointer;
        position: relative;
        border-radius: 4px;
        opacity: 0.3;

        &:hover {
            background-color: ${({ theme }) => theme.color.accent1};
            opacity: 1;
        }
    }
`;
