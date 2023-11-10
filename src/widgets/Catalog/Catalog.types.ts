import { Category, Product } from '@/shared/api/types';

export interface CatalogProps {
    categories: Category[];
    products: Product[];
}
