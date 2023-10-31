'use client';

import styled from 'styled-components';

import { Paragraph, Swiper } from '@/shared/ui';

export const Root = styled.section`
    margin: 80px 0;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 32px;
`;

export const TitleDescription = styled(Paragraph)``;

export const Gallery = styled(Swiper)``;
