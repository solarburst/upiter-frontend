import { Category } from '@/shared/api/types';

export interface CategoriesState {
    categories: Category[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
