'use client';

import { useState } from 'react';

import * as S from './SizeSelect.style';
import { Size, SizeSelectProps } from './SizeSelect.types';

export const SizeSelect: React.FC<SizeSelectProps> = ({ sizes }) => {
    const [selectedSize, setSelectedCateogry] = useState<Size | null>();

    const handleClick = (size: Size) => {
        setSelectedCateogry(size);
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
