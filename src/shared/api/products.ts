import { api } from './api';
import { Product } from './types';

export const getProducts = async (): Promise<Product[]> => {
    const res = await api.get('/products');
    return res.data;
};
