export const usePaths = () => ({
    main: `/`,
    catalog: `/catalog`,
    product: (id: number) => `/catalog/${id}`,
    socials: {
        instagram: 'https://www.instagram.com/',
        telegram: 'https://t.me/',
        whatsapp: 'https://whatsapp.com/',
        youtube: 'https://youtube.com/',
        tiktok: 'https://tiktok.com/',
    },
    privacy: `/privacy`,
});
