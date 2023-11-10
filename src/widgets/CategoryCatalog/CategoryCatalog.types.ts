import { Category, Product } from '@/shared/api/types';

export interface CategoryCatalogProps {
    category: Category;
    products: Product[];
}
