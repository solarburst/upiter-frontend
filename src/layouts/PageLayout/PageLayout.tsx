'use client';

import { usePathname } from 'next/navigation';

import { ChildrenProps } from '@/shared/types';
import { Contacts, Feedback, Footer, Header } from '@/widgets';

import * as S from './PageLayout.style';

export const PageLayout: React.FC<ChildrenProps> = ({ children }) => {
    const pathname = usePathname();

    const hasContacts = pathname === '/';
    const hasFeedback = pathname === '/';

    return (
        <S.Root>
            <Header />
            <main>{children}</main>
            <Footer>
                {hasFeedback && <Feedback title={'underlined'} />}
                {hasContacts && <Contacts />}
            </Footer>
        </S.Root>
    );
};
