import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginRequest, UserState } from "./types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const getInitialValues = () => {
  // let user = {} as User;
  let token = "" as string;
  let isAuthenticated = false;
  if (typeof window !== "undefined") {
    let localStorageToken = localStorage.getItem("token") as string;
    if (localStorageToken) {
      localStorageToken = localStorage.getItem("token") as string;
      token = localStorageToken;
    }
  }

  return {
    token,
    isAuthenticated,
  };
};

export const initialState: UserState = {
  // user: getInitialValues().user,
  token: getInitialValues().token,
  isAuthenticated: getInitialValues().isAuthenticated,
  status: "",
  error: "",
  isNavigated: false,
  //me
  // info: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state: UserState, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    clearError(state: UserState) {
      state.error = "";
    },
    resetUser: () => {
      return initialState;
    },
    resetStatus: (state: UserState) => {
      state.status = "";
    },
    setIsNavigated(state: UserState, { payload }: PayloadAction<boolean>) {
      state.isNavigated = payload;
    },
    logoutFn: (state: UserState) => {
      state.token = "";
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
  },
});


export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  
  endpoints: (builder) => ({
    // getDrugsDetailsById: builder.query({
    //   queryFn: (id) => getDrugsDetailsById(id),
    // }),
    // updateSurvey: builder.mutation({
    //   queryFn: ( data, id ) => updateSurveyService(data, id),
    //   // invalidatesTags: ["surveys"],
    // }),
    // getAllSurvey: builder.query({
    //   queryFn: (status) => getAllSurveysService(status),
    //   // providesTags:["surveys"]
    // }),
  }),
});

export const {
  resetUser,
  // setUser,
  setToken,
  clearError,
  resetStatus,
  setIsNavigated,
  logoutFn,
} = authSlice.actions;

export default authSlice.reducer;
