'use client';

import styled from 'styled-components';

export const Root = styled.section`
    padding-top: 48px;

    @media screen and (max-width: 768px) {
        padding-top: 20px;
    }

    &:not(:last-child) > div {
        border-bottom: 1px solid #ffffff1a;
    }
`;

export const Title = styled.h3`
    align-self: flex-start;
    font-family: ${({ theme }) => theme.fontFamily.unbounded};
    font-size: 32px;
    font-weight: 300;
    line-height: normal;
    color: ${({ theme }) => theme.color.text1};
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 282px);
    gap: 32px 24px;
    padding: 24px 0 60px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px 8px;
        margin: 20px 0;
    }
`;
