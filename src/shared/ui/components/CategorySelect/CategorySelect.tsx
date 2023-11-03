import Link from 'next/link';
import { useEffect, useState } from 'react';

import * as S from './CategorySelect.style';
import { Category, CategorySelectProps } from './CategorySelect.types';

export const CategorySelect: React.FC<CategorySelectProps> = ({ categories, ...props }) => {
    const [selectedCategory, setSelectedCateogry] = useState(categories[0]);

    useEffect(() => {
        setSelectedCateogry(categories[0]);
    }, [categories]);

    const handleClick = (category: Category) => {
        setSelectedCateogry(category);
    };

    return (
        <S.Root {...props}>
            {categories.map((category) => {
                const isSelected = category === selectedCategory;

                return (
                    <S.CategoryButton
                        {...(category.href ? { as: Link, href: category.href } : {})}
                        selected={isSelected}
                        key={category.value}
                        onClick={() => handleClick(category)}
                    >
                        {category.value}
                    </S.CategoryButton>
                );
            })}
        </S.Root>
    );
};
