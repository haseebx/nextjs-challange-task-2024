import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

export const getAuthDataSelector = (state: AppState) => state.auth;

