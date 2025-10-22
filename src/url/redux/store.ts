import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from './slices/authSlice';
import assetReducer from './slices/assetSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    asset:assetReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
