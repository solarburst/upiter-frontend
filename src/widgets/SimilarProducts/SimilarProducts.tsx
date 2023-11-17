'use client';

import { Container, SimilarProductCard } from '@/shared/ui';

import * as S from './SimilarProducts.style';

export const SimilarProducts: React.FC = () => {
    const products = [
        {
            name: 'Небольшое название',
            price: '25 000 Р',
            images: [
                {
                    src: '/storage//products-images/01HFDR4NJJ59E03RAA92MNVGM9.png',
                },
            ],
            categories: [1, 3],
            id: 1,
        },
    ];

    return (
        <S.Root>
            <Container>
                <S.Title>
                    <S.Heading>Похожие товары</S.Heading>
                </S.Title>
                <S.Products slidesPerView={4}>
                    {products.map((item) => (
                        <SimilarProductCard src={item.images[0].src} name={item.name} price={item.price} key={item.id} />
                    ))}
                </S.Products>
            </Container>
        </S.Root>
    );
};
