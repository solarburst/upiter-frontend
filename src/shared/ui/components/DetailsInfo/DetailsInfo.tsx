import React, { useState } from 'react';

import { Modal, SizeSelect } from '@/shared/ui';

import * as S from './DetailsInfo.style';

export const DetailsInfo: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <S.Root>
            <S.Title>
                <S.TitleName>Небольшое название</S.TitleName>
                <S.DetailsParagraph>хвост</S.DetailsParagraph>
                <S.TitlePrice>25 000 ₽</S.TitlePrice>
            </S.Title>
            <S.SizeInfo>
                <S.DetailsParagraph>Размер</S.DetailsParagraph>
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
                    Таблица размеров
                </S.SizeButton>
            </S.SizeInfo>
            <S.BuyButton>Добавить в корзину</S.BuyButton>
            <S.Info>
                <S.InfoFeature>About:</S.InfoFeature>
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
                </S.InfoList>
            </S.Info>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Таблица размеров">
                123
            </Modal>
        </S.Root>
    );
};
