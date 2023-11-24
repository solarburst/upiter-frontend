export interface Product {
    id: number;
    slug: string;
    name: string;
    images: string[];
    category_id: number;
    short_description: string;
    description: string;
    prices: {
        amount: number;
        currency: number;
    }[];
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    products: number;
    sizes: string;
}

export interface Language {
    id: number;
    slug: string;
    name: string;
}

export interface Currency {
    id: number;
    name: string;
}

export interface GalleryItem {
    id: number;
    image: string;
    instagram_name: string;
    instagram_avatar: string;
}

export interface FeedbackItem {
    id: number;
    image: string;
}

export interface BannerType {
    id: number;
    title: string;
    description: string;
    image: string;
    link: {
        label: string;
        url: string;
    };
}

export interface Order {
    user: {
        firstName: string;
        secondName?: string;
        surname: string;
    };
    products: {
        id: number;
        size: string;
        count: number;
    }[];
    delivery: {
        state: string;
        region: string;
        city: string;
        postIndex: string;
        street: string;
        house: string;
        apartment?: string;
        entrance?: string;
        floor?: number;
        phone: string;
        email: string;
        comment: string;
    };
}

export interface OrderResponse {
    order_id: number[];
}
