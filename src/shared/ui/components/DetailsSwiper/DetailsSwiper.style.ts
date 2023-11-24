'use client';

import styled from 'styled-components';

export const Root = styled.div`
    max-width: 616px;
    position: relative;
    display: flex;
    gap: 24px;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    .swiper {
        max-width: 100%;
    }

    .swiper-slide {
        width: fit-content;
        overflow: hidden;
        cursor: pointer;

        img {
            max-width: 100%;
            object-fit: cover;

            @media screen and (max-width: 768px) {
                height: auto;
            }
        }
    }

    .thumbs-swiper {
        cursor: pointer;
    }

    .thumbs-swiper .swiper-slide {
        opacity: 0.4;
    }

    .thumbs-swiper .swiper-slide-thumb-active {
        opacity: 1;
    }
`;

export const SwiperButton = styled.button<{ position: 'left' | 'right' }>`
    display: flex;

    // @media screen and (min-width: 1200px) {
    //     display: none;
    // }

    position: absolute;
    border: none;
    z-index: 2;
    padding: 8px;
    border-radius: 50%;
    ${(props) => `
    ${props.position}: 16px;
    rotate: ${props.position === 'left' ? '90deg' : '-90deg'};
  `}
    cursor: pointer;

    rotate: ${(props) => (props.position === 'left' ? '90deg' : '-90deg')};

    top: calc(50% - 40px);

    background-color: ${({ theme }) => theme.color.bg3};
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    transition: ${({ theme }) => theme.transition.default};

    &:hover:not(:disabled),
    &:active:not(:disabled) {
        background-color: ${({ theme }) => theme.color.accent1};
    }

    &:disabled {
        opacity: 0.7;
        cursor: unset;
    }
`;

export const SwiperMobileButton = styled.button<{ position: 'left' | 'right' }>`
    display: none;

    @media screen and (min-width: calc(1200px + 32px + 80px)) {
        display: flex;
    }

    position: absolute;
    border: none;
    z-index: 2;
    padding: 8px;
    border-radius: 50%;
    ${(props) => `
    ${props.position}: -48px;
    rotate: ${props.position === 'left' ? '90deg' : '-90deg'};
  `}
    cursor: pointer;

    rotate: ${(props) => (props.position === 'left' ? '90deg' : '-90deg')};

    top: calc(50% - 40px);

    background-color: ${({ theme }) => theme.color.bg3};
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    transition: ${({ theme }) => theme.transition.default};

    &:hover:not(:disabled),
    &:active:not(:disabled) {
        background-color: ${({ theme }) => theme.color.accent1};
    }

    &:disabled {
        opacity: 0.7;
        cursor: unset;
    }
`;

export const SwiperPagination = styled.div`
    align-self: center;
    display: flex;
    gap: 8px;
    justify-content: center;

    .swiper-pagination-bullet {
        position: relative;
        background-color: ${({ theme }) => theme.color.bg3};
        cursor: pointer;
        width: 6px;
        height: 6px;
        border-radius: 50%;

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
        background-color: ${({ theme }) => theme.color.accent5};
    }
`;
