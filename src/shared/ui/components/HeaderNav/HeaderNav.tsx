import Link from 'next/link';
import { usePathname } from 'next/navigation';

// import { useEffect, useState } from 'react';
import * as S from './HeaderNav.style';
import { HeaderNavProps } from './HeaderNav.types';

export const HeaderNav: React.FC<HeaderNavProps> = ({ items }) => {
    const pathname = usePathname();

    return (
        <S.Root>
            {items.map((item) => {
                const isSelected = item.href === pathname;

                return (
                    <S.HeaderNavItem {...(item.href ? { as: Link, href: item.href } : {})} selected={isSelected} key={item.value}>
                        {item.value}
                    </S.HeaderNavItem>
                );
            })}
        </S.Root>
    );
};
