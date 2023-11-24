'use client';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { categoriesSlice, productSlice, productsSlice, settingsSlice } from '@/entities';
import { DetailsInformation } from '@/entities/DetailsInformation/DetailsInformation';
import { feedbackSlice } from '@/entities/FeedbackCard';
import { Category, Currency, FeedbackItem, Product } from '@/shared/api/types';
import { Feedback, SimilarProducts } from '@/widgets';

interface DetailsPageProps {
    product: Product;
    settings: Currency[];
    feedback: FeedbackItem[];
    products: Product[];
    categories: Category[];
}

export const DetailsPage: React.FC<DetailsPageProps> = ({ product, settings, feedback, products, categories }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productSlice.actions.setProduct(product));
        dispatch(settingsSlice.actions.setSettings(settings));
        dispatch(feedbackSlice.actions.setFeedback(feedback));
        dispatch(productsSlice.actions.setProducts(products));
        dispatch(categoriesSlice.actions.setCategories(categories));
    }, [product, settings, feedback, products, categories]);

    return (
        <>
            <DetailsInformation />
            <SimilarProducts />
            <Feedback title={'default'} />
        </>
    );
};
