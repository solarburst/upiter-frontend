export interface Product {
    id: number;
    slug: string;
    name: string;
    images: string[];
    categoryId: number;
    short_description: string;
    description: React.ReactNode;
    prices: {
        amount: string;
        currency: string;
    }[];
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    products: number;
    sizes: React.ReactNode;
}
