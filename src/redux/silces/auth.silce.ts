import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAuthState,
  IAuthStateInitialState,
  IUserDetails,
} from "../redux.constants";

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
          phoneNo: action.payload.data.phonenumber,
          accessToken: null,
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
        accessToken: null,
      };
    },
    authRequested: (state: IAuthState) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    authSuccess: (state: IAuthState, action: PayloadAction<IUserDetails>) => {
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        userDetails: { ...action.payload, ...state.userDetails },
      };
    },
    authFailed: (state: IAuthState, action: PayloadAction<any>) => {
      return {
        isAuthenticated: false,
        isLoading: false,
        userDetails: null,
        errormessege: action.payload,
        accessToken: null,
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
