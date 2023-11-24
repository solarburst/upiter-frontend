import { BannerType } from '@/shared/api/types';

export interface BannerState {
    banner: BannerType | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
