import { api } from './api';
import { endpoints } from './lib';
import { Category } from './types';

export const getCategories = async (): Promise<Category[]> => {
    const res = await api.get(endpoints.categories);
    return res.data.data.items;
};
