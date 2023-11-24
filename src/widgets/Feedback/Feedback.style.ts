'use client';

import styled from 'styled-components';

import { PageSection, Swiper } from '@/shared/ui';

export const StyledPageSection = styled(PageSection)`
    padding: 80px 0;
`;

export const Reviews = styled(Swiper)`
    margin-top: 32px;

    .swiper {
        width: 100%;
    }
`;
