'use client';

import styled from 'styled-components';

import { DefaultTitle, Swiper } from '@/shared/ui';

export const Root = styled.section``;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 64px 0 32px;
    border-top: 1px solid #ffffff1a;

    @media screen and (max-width: 768px) {
        padding: 24px 0;
    }
`;

export const Heading = styled(DefaultTitle)`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: 24px;
    font-weight: 300;
`;

export const Products = styled(Swiper)`
    border-bottom: 1px solid #ffffff1a;
    padding-bottom: 64px;

    @media screen and (max-width: 768px) {
        padding-bottom: 32px;
        gap: 16px;
    }

    button {
        top: calc(50% - 104px);

        @media screen and (max-width: 768px) {
            top: calc(50% - 72px);
        }
    }
`;
