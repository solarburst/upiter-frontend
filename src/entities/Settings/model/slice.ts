import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { getSettings } from '@/shared/api';

import { SettingsState } from './types';

const initialState = {
    currencies: [],
    selectedCurrency: Number(Cookies.get('SELECTED_CURRENCY')) ?? 1,
    status: 'idle',
    error: null,
} as SettingsState;

export const fetchSettings = createAsyncThunk('settings/fetchSettings', async () => {
    const data = await getSettings();
    return data;
});

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setSettings: (state, action) => {
            state.currencies = action.payload;
            state.status = 'succeeded';
            state.error = null;
            const settedCurrencyCookie = Cookies.get('SELECTED_CURRENCY');
            if (!settedCurrencyCookie) {
                Cookies.set('SELECTED_CURRENCY', state.currencies[0].id.toString());
                state.selectedCurrency = Number(Cookies.get('SELECTED_CURRENCY'));
            }
        },
        setSelectedCurrency: (state, action) => {
            state.selectedCurrency = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSettings.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSettings.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currencies = action.payload;
            })
            .addCase(fetchSettings.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'An error occurred';
            });
    },
});
