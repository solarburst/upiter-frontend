import { api } from './api';
import { endpoints } from './lib';
import { Currency } from './types';

export const getSettings = async (): Promise<Currency[]> => {
    const res = await api.get(endpoints.settings);
    return res.data.data.currencies;
};
