'use client';

import styled from 'styled-components';

import { Paragraph, Swiper } from '@/shared/ui';

export const Root = styled.section`
    padding: 48px 0 80px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 32px;

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`;

export const TitleDescription = styled(Paragraph)``;

export const Gallery = styled(Swiper)``;
