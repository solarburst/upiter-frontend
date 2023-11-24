import { FeedbackItem } from '@/shared/api/types';

export interface FeedbackState {
    feedback: FeedbackItem[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
