'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { CatalogCard } from '@/entities';
import { Category, Product } from '@/shared/api/types';
import { useAppSelector } from '@/shared/hooks';

import * as S from './Catalog.style';

export const Catalog: React.FC = () => {
    const t = useTranslations('Main');
    const [selectedCategory, setSelectedCateogry] = useState<number>();

    const products = useAppSelector<Product[]>((state) => state.products.products);
    const categories = useAppSelector<Category[]>((state) => state.categories.categories);

    return (
        <S.StyledPageSection
            titleType="underlined"
            title={t('catalog.title')}
            subtitle={t('catalog.subtitle')}
            titleChildren={<S.Categories categories={categories} onSelectCategory={setSelectedCateogry} />}
        >
            <S.Content>
                {products
                    .slice(0, 8)
                    .filter((item) => item.category_id === selectedCategory)
                    .map((item) => (
                        <CatalogCard slug={item.slug} images={item.images} name={item.name} prices={item.prices} key={item.id} />
                    ))}
            </S.Content>
            <S.ShowAll>{t('catalog.showAll')}</S.ShowAll>
        </S.StyledPageSection>
    );
};
