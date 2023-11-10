import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getProducts } from '@/shared/api';

import { ProductsState } from './types';

const initialState = {
    products: [],
    status: 'idle',
    error: null,
} as ProductsState;

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const data = await getProducts();
    return data;
});

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
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
