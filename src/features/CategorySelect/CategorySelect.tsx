import { useEffect, useRef, useState } from 'react';

import * as S from './CategorySelect.style';
import { Category, CategorySelectProps } from './CategorySelect.types';

export const CategorySelect: React.FC<CategorySelectProps> = ({ categories, onSelectCategory, ...props }) => {
    const [selectedCategory, setSelectedCategory] = useState<Category>();

    useEffect(() => {
        if (categories && categories.length > 0) {
            setSelectedCategory(categories[0]);
            onSelectCategory(categories[0].id);
        }
    }, [categories]);

    const handleClick = (category: Category) => {
        setSelectedCategory(category);
        onSelectCategory(category.id);
    };

    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += e.movementX * 3;
        }
    };

    return (
        <S.Root {...props} ref={containerRef} onMouseMove={handleMouseMove}>
            {categories.map((category) => {
                const isSelected = category.id === selectedCategory?.id;

                return (
                    <S.CategoryButton selected={isSelected} key={category.id} onClick={() => handleClick(category)}>
                        {category.name}
                    </S.CategoryButton>
                );
            })}
        </S.Root>
    );
};
