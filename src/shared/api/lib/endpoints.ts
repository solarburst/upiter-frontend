export const endpoints = {
    banners: `/banners`,
    products: `/products`,
    product: (slug: string) => `/products/${slug}`,
    order: `/products/book`,
    languages: `/dictionaries?by_name=languages`,
    settings: `/dictionaries?by_name=currencies`,
    categories: `/categories`,
    gallery: `/gallery`,
    feedback: `/reviews`,
    banner: `/banners/main`,
};
