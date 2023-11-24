export interface CatalogCardProps {
    slug: string;
    images: string[];
    name: string;
    prices: {
        amount: number;
        currency: number;
    }[];
}
