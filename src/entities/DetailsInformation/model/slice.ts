import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { getProductBySlug } from '@/shared/api';

import { ProductState } from './types';

const initialState = {
    product: null,
    status: 'idle',
    error: null,
} as ProductState;

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (slug: string) => {
    const locale = Cookies.get('NEXT_LOCALE');

    const data = await getProductBySlug(slug, locale || 'ru');
    return data;
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
            state.status = 'succeeded';
            state.error = null;
        },
        setSize: (state, action) => {
            state.size = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An error occurred';
            });
    },
});
