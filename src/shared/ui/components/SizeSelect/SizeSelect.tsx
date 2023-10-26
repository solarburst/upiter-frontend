import { useEffect, useState } from 'react';

import * as S from './SizeSelect.style';
import { Size, SizeSelectProps } from './SizeSelect.types';

export const SizeSelect: React.FC<SizeSelectProps> = ({ sizes }) => {
    const [selectedSize, setSelectedCateogry] = useState(sizes[0]);

    useEffect(() => {
        setSelectedCateogry(sizes[0]);
    }, [sizes]);

    const handleClick = (size: Size) => {
        setSelectedCateogry(size);
    };

    return (
        <S.Root>
            {sizes.map((size) => {
                const isSelected = size === selectedSize;

                return (
                    <S.SizeButton selected={isSelected} key={size.value} onClick={() => handleClick(size)}>
                        {size.value}
                    </S.SizeButton>
                );
            })}
        </S.Root>
    );
};
