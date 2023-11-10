import React from 'react';

import { getCategories, getProducts } from '@/shared/api';
import { CategoryCatalog } from '@/widgets';

import * as S from './CatalogPage.style';

export const CatalogPage = async () => {
    const categories = await getCategories();
    const products = await getProducts();

    return (
        <S.Root>
            {categories.map((item) => (
                <CategoryCatalog category={item} products={products} key={item.id} />
            ))}
        </S.Root>
    );
};
