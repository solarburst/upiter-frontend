'use client';

import { usePathname } from 'next/navigation';

import { ChildrenProps } from '@/shared/types';
import { Contacts, CookieBanner, Feedback, Footer, Header, SocialsBanner } from '@/widgets';

import * as S from './PageLayout.style';

export const PageLayout: React.FC<ChildrenProps> = ({ children }) => {
    const pathname = usePathname();

    const hasContacts = pathname === '/en' || pathname === '/ru';
    const hasFeedback = pathname === '/en' || pathname === '/ru';

    return (
        <S.Root>
            <Header />
            <main>{children}</main>
            <Footer>
                {hasFeedback && <Feedback title={'underlined'} />}
                {hasContacts && <Contacts />}
            </Footer>
            <S.Widgets>
                <CookieBanner />
                <SocialsBanner />
            </S.Widgets>
        </S.Root>
    );
};
