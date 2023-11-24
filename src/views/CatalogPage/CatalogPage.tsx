'use client';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { categoriesSlice, productsSlice, settingsSlice } from '@/entities';
import { Category, Currency, Product } from '@/shared/api/types';
import { CategoryCatalog } from '@/widgets';

import * as S from './CatalogPage.style';

interface CatalogPageProps {
    categories: Category[];
    products: Product[];
    settings: Currency[];
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ categories, products, settings }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsSlice.actions.setProducts(products));
        dispatch(categoriesSlice.actions.setCategories(categories));
        dispatch(settingsSlice.actions.setSettings(settings));
    }, [categories, products]);

    return (
        <S.Root>
            {categories.map((item) => (
                <CategoryCatalog category={item} products={products} key={item.id} />
            ))}
        </S.Root>
    );
};
