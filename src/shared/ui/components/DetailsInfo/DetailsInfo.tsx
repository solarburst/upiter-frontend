'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { useAppSelector, useCurrency } from '@/shared/hooks';
import { Modal, SizeSelect } from '@/shared/ui';
import { Paragraph } from '@/shared/ui/primitives/Paragraph';
import { OrderModal } from '@/widgets';

import * as S from './DetailsInfo.style';
import { DetailsInfoProps } from './DetailsInfo.types';

export const DetailsInfo: React.FC<DetailsInfoProps> = ({ product, sizes }) => {
    const t = useTranslations('Product');
    const selectedCurrency = useAppSelector<number>((state) => state.settings.selectedCurrency);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const price = useCurrency(product.prices, selectedCurrency);
    const size = useAppSelector<string | null>((state) => state.product.size);

    return (
        <S.Root>
            <S.Title>
                <S.TitleName>{product.name}</S.TitleName>
                <Paragraph>{product.short_description}</Paragraph>
                <S.TitlePrice>{price}</S.TitlePrice>
            </S.Title>
            <S.SizeInfo>
                <Paragraph>{t('size')}</Paragraph>
                <SizeSelect
                    sizes={[
                        {
                            value: 'XS',
                        },
                        {
                            value: 'S',
                        },
                        {
                            value: 'M',
                        },
                        {
                            value: 'L',
                        },
                        {
                            value: 'XL',
                        },
                        {
                            value: 'XXL',
                        },
                        {
                            value: 'XXXL',
                        },
                    ]}
                />
                <S.SizeButton type="button" onClick={() => setIsModalOpen(true)}>
                    {t('sizesTable')}
                </S.SizeButton>
            </S.SizeInfo>
            <S.BuyButton onClick={() => setIsOrderOpen(true)} disabled={!size}>
                {t('ordering')}
            </S.BuyButton>
            <S.Info dangerouslySetInnerHTML={{ __html: product.description }}>
                {/* <S.InfoFeature>About:</S.InfoFeature>
                <S.InfoText>
                    A sporty casual look, wear them comfortably to yoga class or in style at your favorite beachfront hotspot. Compare to
                    standard women’s pant sizes. Choose a smaller size for a more snug fit.
                </S.InfoText>
                <S.InfoFeature>Design Features:</S.InfoFeature>
                <S.InfoList>
                    <S.InfoListItem>High-waisted design</S.InfoListItem>
                    <S.InfoListItem>Wide yoga-style waistband</S.InfoListItem>
                    <S.InfoListItem>Full length with average to long inseam</S.InfoListItem>
                    <S.InfoListItem>Proudly made in the USA</S.InfoListItem>
                    <S.InfoListItem>Elastic waistband</S.InfoListItem>
                </S.InfoList> */}
            </S.Info>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={t('sizesTable')}>
                <S.Sizes dangerouslySetInnerHTML={{ __html: sizes }}></S.Sizes>
            </Modal>
            <OrderModal isOpen={isOrderOpen} setIsOpen={setIsOrderOpen} />
        </S.Root>
    );
};
