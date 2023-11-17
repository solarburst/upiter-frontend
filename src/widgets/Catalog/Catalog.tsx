'use client';

import { useState } from 'react';

import { CatalogCard } from '@/entities';

import * as S from './Catalog.style';
import { CatalogProps } from './Catalog.types';

export const Catalog: React.FC<CatalogProps> = ({ categories, products }) => {
    const [selectedCategory, setSelectedCateogry] = useState<number>();

    return (
        <S.StyledPageSection
            titleType="underlined"
            title="Каталог"
            subtitle="готовые решения в наличии"
            titleChildren={<S.Categories categories={categories} onSelectCategory={setSelectedCateogry} />}
        >
            <S.Content>
                {products
                    .filter((item) => item.categoryId === selectedCategory)
                    .map((item) => (
                        <CatalogCard
                            id={item.id}
                            images={item.images}
                            name={item.name}
                            price={item.prices[item.id + 1].amount}
                            key={item.id}
                        />
                    ))}
            </S.Content>
            <S.ShowAll>Показать всё +</S.ShowAll>
        </S.StyledPageSection>
    );
};
