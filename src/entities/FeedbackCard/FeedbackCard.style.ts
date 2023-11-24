'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Root = styled.article`
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    height: 500px;
    width: 282px;
    cursor: pointer;
    display: flex;

    @media screen and (max-width: 768px) {
        height: 496px;
        width: 280px;
    }
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
