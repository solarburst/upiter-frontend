import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getFeedback } from '@/shared/api';

import { FeedbackState } from './types';

const initialState = {
    feedback: [],
    status: 'idle',
    error: null,
} as FeedbackState;

export const fetchFeedback = createAsyncThunk('feedback/fetchFeedback', async () => {
    const data = await getFeedback();
    return data;
});

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        setFeedback: (state, action) => {
            state.feedback = action.payload;
            state.status = 'succeeded';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeedback.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFeedback.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.feedback = action.payload;
            })
            .addCase(fetchFeedback.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An error occurred';
            });
    },
});
