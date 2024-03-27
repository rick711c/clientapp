import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthState, IAuthStateInitialState } from "../redux.constants";

export const authSlice = createSlice({
  name: "auth",
  initialState: IAuthStateInitialState,

  reducers: {
    otpRequested: (state: IAuthState) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    otpSuccess: (state: IAuthState, action: PayloadAction<any>) => {
      return {
        ...state,
        userDetails: {
          userID: "",
          userName: "",
          fullname: "",
          email: "",
          phoneNumber: action.payload.data.phonenumber,
          accessToken: action.payload.data.accessToken,
        },
        isLoading: false,
      };
    },
    otpFailed: (state: IAuthState, action: PayloadAction<any>) => {
      return {
        isAuthenticated: false,
        isLoading: false,
        userDetails: null,
        errormessege: action.payload,
        accessToken:null,
      };
    },
    authRequested: (state: IAuthState) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    authSuccess: (state: IAuthState, action: PayloadAction<any>) => {
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        userDetails: { ...state.userDetails, ...action.payload },
      };
    },
    authFailed: (state: IAuthState, action: PayloadAction<any>) => {
      return {
        isAuthenticated: false,
        isLoading: false,
        userDetails: null,
        errormessege: action.payload,
        accessToken:null,
      };
    },

    logOut: (state: IAuthState) => {
      return {
        ...state,
        isAuthenticated: false,
        userDetails: null,
      };
    },
  },
});
export const {
  authRequested,
  authSuccess,
  authFailed,
  otpRequested,
  otpSuccess,
  otpFailed,
  logOut,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
