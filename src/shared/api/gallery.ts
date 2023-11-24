import { api } from './api';
import { endpoints } from './lib';
import { GalleryItem } from './types';

export const getGallery = async (): Promise<GalleryItem[]> => {
    const res = await api.get(endpoints.gallery);
    return res.data.data.items;
};
