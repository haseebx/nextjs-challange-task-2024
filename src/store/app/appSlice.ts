import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "./types";

export const initialState: IAppState = {
  error: "",
  loading: false,
  status: "",
  totalQuestion: 1,
  requestedSurvey: 0,
  currentSectionIndex: 0,
  currentQuestionIndex: 0,
  profileImg: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    clearErrors(state: IAppState) {
      state.error = "";
    },
    resetApp: () => {
      return initialState;
    },
    setTotalQuestion: (state, { payload }) => {
      state.totalQuestion = payload;
    },
    delTotalQuestion: (state) => {
      state.totalQuestion--;
    },

    setRequestedSurvey: (state, { payload }) => {
      state.totalQuestion = payload;
    },
    setCurrentSectionIndex: (state, { payload }) => {
      state.currentSectionIndex = payload;
    },
    setCurrentQuestionIndex: (state, { payload }) => {
      state.currentQuestionIndex = payload;
    },
    setProfileImg: (state, { payload }) => {
      console.log({ payload });
      state.profileImg = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  clearErrors,
  resetApp,
  setTotalQuestion,
  delTotalQuestion,
  setCurrentSectionIndex,
  setCurrentQuestionIndex,
  setProfileImg,
} = appSlice.actions;

export default appSlice.reducer;
