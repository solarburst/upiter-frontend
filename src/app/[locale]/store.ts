import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { bannerSlice, categoriesSlice, feedbackSlice, gallerySlice, productSlice, productsSlice, settingsSlice } from '@/entities';

export const store = configureStore({
    reducer: {
        [productsSlice.name]: productsSlice.reducer,
        [categoriesSlice.name]: categoriesSlice.reducer,
        [productSlice.name]: productSlice.reducer,
        [settingsSlice.name]: settingsSlice.reducer,
        [gallerySlice.name]: gallerySlice.reducer,
        [feedbackSlice.name]: feedbackSlice.reducer,
        [bannerSlice.name]: bannerSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
