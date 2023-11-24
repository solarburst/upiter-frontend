import { Product } from '@/shared/api/types';

export interface ProductState {
    product: Product | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    size: string | null;
}
