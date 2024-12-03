import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import { appApi } from './auth/authSlice';

export const store = configureStore({
  reducer:rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(appApi.middleware);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
