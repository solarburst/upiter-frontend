'use client';

import { useState } from 'react';

import { CatalogCard } from '@/entities';
import { Container, UnderlinedTitle } from '@/shared/ui';

import * as S from './Catalog.style';
import { CatalogProps } from './Catalog.types';

export const Catalog: React.FC<CatalogProps> = ({ categories, products }) => {
    const [selectedCategory, setSelectedCateogry] = useState<number>();

    return (
        <S.Root>
            <Container>
                <S.Top>
                    <S.Title>
                        <UnderlinedTitle>Каталог</UnderlinedTitle>
                        <S.TitleDescription>готовые решения в наличии</S.TitleDescription>
                    </S.Title>
                    <S.Categories categories={categories} onSelectCategory={setSelectedCateogry} />
                </S.Top>
                <S.Content>
                    {products
                        .filter((item) => item.categories.some((categoryItem) => categoryItem === selectedCategory))
                        .map((item) => (
                            <CatalogCard images={item.images} name={item.name} price={item.price} key={item.id} />
                        ))}
                </S.Content>
                <S.ShowAll>Показать всё +</S.ShowAll>
            </Container>
        </S.Root>
    );
};
