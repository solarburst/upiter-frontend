import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getGallery } from '@/shared/api';

import { GalleryState } from './types';

const initialState = {
    gallery: [],
    status: 'idle',
    error: null,
} as GalleryState;

export const fetchGallery = createAsyncThunk('gallery/fetchGallery', async () => {
    const data = await getGallery();
    return data;
});

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setGallery: (state, action) => {
            state.gallery = action.payload;
            state.status = 'succeeded';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGallery.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGallery.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.gallery = action.payload;
            })
            .addCase(fetchGallery.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An error occurred';
            });
    },
});
