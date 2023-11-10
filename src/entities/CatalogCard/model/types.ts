import { Product } from '@/shared/api/types';

export interface ProductsState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
