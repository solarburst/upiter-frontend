'use client';

import { useTranslations } from 'next-intl';

import { CatalogCard } from '@/entities';
import { Product } from '@/shared/api/types';
import { useAppSelector } from '@/shared/hooks';
import { Container } from '@/shared/ui';

import * as S from './SimilarProducts.style';

export const SimilarProducts: React.FC = () => {
    const t = useTranslations('Product');
    const currentProduct = useAppSelector<Product | null>((state) => state.product.product);
    const products = useAppSelector<Product[]>((state) => state.products.products);
    const similar = products.filter((item) => item.category_id === currentProduct?.category_id && item.id !== currentProduct?.id);

    return (
        <S.Root>
            <Container>
                <S.Title>
                    <S.Heading>{t('similarProducts')}</S.Heading>
                </S.Title>
                <S.Products slidesPerView={4}>
                    {similar.map((item) => (
                        <CatalogCard slug={item.slug} images={item.images} name={item.name} prices={item.prices} key={item.id} />
                    ))}
                </S.Products>
            </Container>
        </S.Root>
    );
};
