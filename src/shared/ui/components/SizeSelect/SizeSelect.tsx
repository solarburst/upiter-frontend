'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { productSlice } from '@/entities';

import * as S from './SizeSelect.style';
import { Size, SizeSelectProps } from './SizeSelect.types';

export const SizeSelect: React.FC<SizeSelectProps> = ({ sizes }) => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedCateogry] = useState<Size | null>();

    const handleClick = (size: Size) => {
        setSelectedCateogry(size);
        dispatch(productSlice.actions.setSize(size.value));
    };

    return (
        <S.Root>
            {sizes.map((size) => {
                const isSelected = size.value === selectedSize?.value;

                return (
                    <S.SizeButton selected={isSelected} key={size.value} onClick={() => handleClick(size)}>
                        {size.value}
                    </S.SizeButton>
                );
            })}
        </S.Root>
    );
};
