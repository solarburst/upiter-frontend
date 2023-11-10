'use client';

import styled from 'styled-components';

export const DefaultTitle = styled.h2`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.color.text1};
    width: fit-content;

    @media screen and (max-width: 768px) {
        font-family: ${({ theme }) => theme.fontFamily.unbounded};
        font-weight: 300;
    }
`;
