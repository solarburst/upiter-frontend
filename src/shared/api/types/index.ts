export interface ProductImage {
    src: string;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    images: ProductImage[];
    categories: number[];
}

export interface Category {
    id: number;
    name: string;
}
