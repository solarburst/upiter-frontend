import { useEffect, useState } from 'react';

import * as S from './CategorySelect.style';
import { Category, CategorySelectProps } from './CategorySelect.types';

export const CategorySelect: React.FC<CategorySelectProps> = ({ categories, onSelectCategory, ...props }) => {
    const [selectedCategory, setSelectedCateogry] = useState<Category>();

    useEffect(() => {
        if (categories && categories.length > 0) {
            setSelectedCateogry(categories[0]);
            onSelectCategory(categories[0].id);
        }
    }, [categories]);

    const handleClick = (category: Category) => {
        setSelectedCateogry(category);
        onSelectCategory(category.id);
    };

    return (
        <S.Root {...props}>
            {categories.map((category) => {
                const isSelected = category === selectedCategory;

                return (
                    <S.CategoryButton selected={isSelected} key={category.id} onClick={() => handleClick(category)}>
                        {category.name}
                    </S.CategoryButton>
                );
            })}
        </S.Root>
    );
};
