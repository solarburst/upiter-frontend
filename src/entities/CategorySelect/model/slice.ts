import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { getCategories } from '@/shared/api';

import { CategoriesState } from './types';

const initialState = {
    categories: [],
    status: 'idle',
    error: null,
} as CategoriesState;

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const locale = Cookies.get('NEXT_LOCALE');

    const data = await getCategories(locale || 'ru');
    return data;
});

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
            state.status = 'succeeded';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An error occurred';
            });
    },
});
