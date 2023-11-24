import { Currency } from '@/shared/api/types';

export interface SettingsState {
    currencies: Currency[];
    selectedCurrency: number;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
