import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import { PageLayout } from '@/layouts';
import { GlobalStyle, StyledComponentsRegistry, ThemeProvider } from '@/shared/styles';

import { Providers } from './provider';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'UPITER.J',
    applicationName: 'UPITER.J',
    keywords: ['UPITER.J', 'upiter.j', 'swimtails', 'mermaid tails'],
    icons: {
        icon: '/icon.svg',
    },
};

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ru' }];
}

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
    let messages;
    try {
        messages = (await import(`../../../locales/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <Providers>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <StyledComponentsRegistry>
                        <ThemeProvider>
                            <GlobalStyle />
                            <body>
                                <PageLayout>{children}</PageLayout>
                            </body>
                        </ThemeProvider>
                    </StyledComponentsRegistry>
                </NextIntlClientProvider>
            </Providers>
        </html>
    );
}
