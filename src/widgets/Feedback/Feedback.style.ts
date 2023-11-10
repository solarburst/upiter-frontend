'use client';

import styled from 'styled-components';

import { Swiper } from '@/shared/ui';

export const Root = styled.div`
    padding: 80px 0;

    @media screen and (max-width: 768px) {
        padding: 32px 0 40px;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Reviews = styled(Swiper)`
    margin-top: 32px;
`;
