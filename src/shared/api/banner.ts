import { api } from './api';
import { endpoints } from './lib';
import { BannerType } from './types';

export const getBanner = async (locale: string): Promise<BannerType> => {
    const res = await api.get(endpoints.banner, {
        headers: {
            'Accept-Language': locale,
        },
    });
    return res.data.data;
};
