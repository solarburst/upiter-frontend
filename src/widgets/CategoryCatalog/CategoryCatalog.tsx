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
                        .filter((item) => item.category_id === category.id)
                        .map((item) => (
                            <CatalogCard slug={item.slug} images={item.images} name={item.name} prices={item.prices} key={item.id} />
                        ))}
                </S.Content>
            </Container>
        </S.Root>
    );
};
