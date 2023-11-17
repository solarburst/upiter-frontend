'use client';

import React from 'react';

import { Container, DetailsInfo, DetailsSwiper } from '@/shared/ui';

import * as S from './DetailsInformation.style';

export const DetailsInformation = () => {
    const gallery = [
        {
            id: 1,
            src: '/storage//products-images/01HFDR4NJJ59E03RAA92MNVGM9.png',
        },
    ];

    return (
        <S.Root>
            <Container>
                <S.Information>
                    <DetailsSwiper images={gallery} />
                    <DetailsInfo />
                </S.Information>
            </Container>
        </S.Root>
    );
};
