'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Root = styled.article`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: fit-content;
`;

export const SimilarProductImage = styled.div`
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    height: 440px;
    width: 282px;
    cursor: pointer;
    display: flex;
`;

export const Background = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
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
