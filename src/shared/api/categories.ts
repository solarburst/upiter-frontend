import { api } from './api';
import { endpoints } from './lib';
import { Category } from './types';

export const getCategories = async (locale: string): Promise<Category[]> => {
    const res = await api.get(endpoints.categories, {
        headers: {
            'Accept-Language': locale,
        },
    });
    return res.data.data.items;
};
