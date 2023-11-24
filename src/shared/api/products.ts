import { api } from './api';
import { endpoints } from './lib';
import { Product } from './types';

export const getProducts = async (locale: string, filter?: string): Promise<Product[]> => {
    const res = filter
        ? await api.get(endpoints.products + filter, {
              headers: {
                  'Accept-Language': locale,
              },
          })
        : await api.get(endpoints.products, {
              headers: {
                  'Accept-Language': locale,
              },
          });
    return res.data.data.items;
};

export const getProductBySlug = async (slug: string, locale: string): Promise<Product> => {
    const res = await api.get(endpoints.product(slug), {
        headers: {
            'Accept-Language': locale,
        },
    });
    return res.data.data;
};
