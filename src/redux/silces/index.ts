import { authReducer } from "./auth.silce";
import { IApplicationStates, IAuthState, UserData } from "../redux.constants";
import { combineReducers } from "@reduxjs/toolkit";
import { userDataReducer } from "./userdata.slice";

export const rootReducer = combineReducers({
  auth: authReducer,

  userdata: userDataReducer,
});
