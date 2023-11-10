import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { productsSlice } from '@/entities';

export const store = configureStore({
    reducer: {
        [productsSlice.name]: productsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
