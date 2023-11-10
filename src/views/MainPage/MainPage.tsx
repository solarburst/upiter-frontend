import React from 'react';

import { getCategories, getProducts } from '@/shared/api';
import { Catalog, Gallery, Title } from '@/widgets';

export const MainPage = async () => {
    const categories = await getCategories();
    const products = await getProducts();

    return (
        <>
            <Title />
            <Catalog categories={categories} products={products} />
            <Gallery />
        </>
    );
};
