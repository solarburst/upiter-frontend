import { useLocale } from 'next-intl';

export const usePaths = () => {
    const locale = useLocale();

    return {
        main: `/${locale}`,
        catalog: `/${locale}/catalog`,
        product: (slug: string) => `/${locale}/catalog/${slug}`,
        socials: {
            instagram: 'https://www.instagram.com/',
            telegram: 'https://t.me/',
            whatsapp: 'https://whatsapp.com/',
            youtube: 'https://youtube.com/',
            tiktok: 'https://tiktok.com/',
        },
        privacy: `/${locale}/privacy`,
    };
};
