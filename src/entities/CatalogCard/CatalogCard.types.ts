export interface CatalogCardImage {
    src: string;
}

export interface CatalogCardProps {
    images: CatalogCardImage[];
    name: string;
    price: string;
}
