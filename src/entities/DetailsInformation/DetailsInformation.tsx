'use client';

import React from 'react';

import { Category, Product } from '@/shared/api/types';
import { useAppSelector } from '@/shared/hooks';
import { Container, DetailsInfo, DetailsSwiper } from '@/shared/ui';

import * as S from './DetailsInformation.style';

export const DetailsInformation: React.FC = () => {
    const product = useAppSelector<Product | null>((state) => state.product.product);
    const categories = useAppSelector<Category[]>((state) => state.categories.categories);

    const sizes = categories.find((item) => item.id === product?.category_id)?.sizes;

    return (
        <S.Root>
            <Container>
                <S.Information>
                    {product ? (
                        <>
                            <DetailsSwiper images={product.images} />
                            <DetailsInfo product={product} sizes={sizes || ''} />
                        </>
                    ) : (
                        <div>Loading...</div>
                    )}
                </S.Information>
            </Container>
        </S.Root>
    );
};
