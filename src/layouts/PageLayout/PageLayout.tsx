'use client';

import { ChildrenProps } from '@/shared/types';
import { Contacts, Feedback, Footer, Header } from '@/widgets';

export const PageLayout: React.FC<ChildrenProps> = ({ children }) => {
    const hasFeedback = true;
    const hasContacts = true;

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer>
                {hasFeedback && <Feedback />}
                {hasContacts && <Contacts />}
            </Footer>
        </>
    );
};
