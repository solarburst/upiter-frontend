import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { getProducts } from '@/shared/api';

import { ProductsState } from './types';

const initialState = {
    products: [],
    status: 'idle',
    error: null,
} as ProductsState;

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const locale = Cookies.get('NEXT_LOCALE');

    const data = await getProducts(locale || 'ru');
    return data;
});

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            state.status = 'succeeded';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An error occurred';
            });
    },
});
