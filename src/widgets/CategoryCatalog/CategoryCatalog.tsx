'use client';

import { CatalogCard } from '@/entities';
import { Container } from '@/shared/ui';

import * as S from './CategoryCatalog.style';
import { CategoryCatalogProps } from './CategoryCatalog.types';

export const CategoryCatalog: React.FC<CategoryCatalogProps> = ({ category, products }) => {
    return (
        <S.Root>
            <Container>
                <S.Title>{category.name}</S.Title>
                <S.Content>
                    {products
                        .filter((item) => item.categories.some((categoryItem) => categoryItem === category.id))
                        .map((item) => (
                            <CatalogCard images={item.images} name={item.name} price={item.price} key={item.id} />
                        ))}
                </S.Content>
            </Container>
        </S.Root>
    );
};
