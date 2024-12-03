import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';
import app from './app';
import { appApi } from './auth/authSlice';

const rootReducer = combineReducers({
  auth,
  app,
  [appApi.reducerPath]:appApi.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
