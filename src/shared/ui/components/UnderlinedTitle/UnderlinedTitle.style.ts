'use client';

import styled from 'styled-components';

export const UnderlinedTitle = styled.h2`
    font-family: ${({ theme }) => theme.fontFamily.unbounded};
    font-size: 40px;
    font-weight: 300;
    line-height: 56px;
    color: ${({ theme }) => theme.color.text1};
    position: relative;
    z-index: 2;
    width: fit-content;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 6px;
        background-color: ${({ theme }) => theme.color.accent1};
        position: absolute;
        bottom: 9px;
        z-index: -1;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: normal;

        &::after {
            height: 4px;
            bottom: 6px;
        }
    }
`;
