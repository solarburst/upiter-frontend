import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { getBanner } from '@/shared/api';

import { BannerState } from './types';

const initialState = {
    banner: null,
    status: 'idle',
    error: null,
} as BannerState;

export const fetchBanner = createAsyncThunk('banner/fetchBanner', async () => {
    const data = await getBanner('ru' || Cookies.get('NEXT_LOCALE'));
    return data;
});

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        setBanner: (state, action) => {
            state.banner = action.payload;
            state.status = 'succeeded';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBanner.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBanner.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.banner = action.payload;
            })
            .addCase(fetchBanner.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An error occurred';
            });
    },
});
