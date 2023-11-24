'use client';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Banner, bannerSlice, categoriesSlice, gallerySlice, productsSlice, settingsSlice } from '@/entities';
import { feedbackSlice } from '@/entities/FeedbackCard';
import { BannerType, Category, Currency, FeedbackItem, GalleryItem, Product } from '@/shared/api/types';
import { Catalog, Gallery } from '@/widgets';

interface MainPageProps {
    categories: Category[];
    products: Product[];
    settings: Currency[];
    gallery: GalleryItem[];
    feedback: FeedbackItem[];
    banner: BannerType;
}

export const MainPage: React.FC<MainPageProps> = ({ categories, products, settings, gallery, feedback, banner }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsSlice.actions.setProducts(products));
        dispatch(categoriesSlice.actions.setCategories(categories));
        dispatch(settingsSlice.actions.setSettings(settings));
        dispatch(gallerySlice.actions.setGallery(gallery));
        dispatch(feedbackSlice.actions.setFeedback(feedback));
        dispatch(bannerSlice.actions.setBanner(banner));
    }, [categories, products, settings, gallery, feedback, banner]);

    return (
        <>
            <Banner />
            <Catalog />
            <Gallery />
        </>
    );
};
