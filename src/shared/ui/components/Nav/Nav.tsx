import Link from 'next/link';
import { usePathname } from 'next/navigation';

// import { useEffect, useState } from 'react';
import * as S from './Nav.style';
import { NavProps } from './Nav.types';

export const Nav: React.FC<NavProps> = ({ items }) => {
    const pathname = usePathname();

    return (
        <S.Root>
            {items.map((item) => {
                const isSelected = item.href === pathname;

                return (
                    <S.NavItem {...(item.href ? { as: Link, href: item.href } : {})} selected={isSelected} key={item.value}>
                        {item.value}
                    </S.NavItem>
                );
            })}
        </S.Root>
    );
};
