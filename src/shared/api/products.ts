import { api } from './api';
import { endpoints } from './lib';
import { Product } from './types';

export const getProducts = async (): Promise<Product[]> => {
    console.log(api.getUri());
    const res = await api.get(endpoints.products);
    return res.data.data.items;
};
