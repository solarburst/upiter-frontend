'use client';

import { usePathname } from 'next/navigation';

import { ChildrenProps } from '@/shared/types';
import { Contacts, Feedback, Footer, Header } from '@/widgets';

export const PageLayout: React.FC<ChildrenProps> = ({ children }) => {
    const pathname = usePathname();

    let hasFeedback;
    let hasContacts;

    if (pathname === '/') {
        hasFeedback = true;
        hasContacts = true;
    } else {
        hasFeedback = false;
        hasContacts = false;
    }

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer>
                {hasFeedback && <Feedback title={'underlined'} />}
                {hasContacts && <Contacts />}
            </Footer>
        </>
    );
};
