import { GalleryItem } from '@/shared/api/types';

export interface GalleryState {
    gallery: GalleryItem[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
