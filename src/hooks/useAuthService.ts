import { useDispatch, useSelector } from "react-redux";
import {
  authFailed,
  authRequested,
  authSuccess,
  logOut,
  otpFailed,
  otpRequested,
  otpSuccess,
} from "../redux/silces/auth.silce";


import { RootState } from "../redux";
import { appointments, dateSlots, IAuthState, IUserDetails, timeSlots } from "../redux/redux.constants";
import { login, requestOTP } from "../services/auth/auth.service";

export interface sendOTPPayload {
  phoneNo: string;
  otherDetails?: any;
}


const useAuthService = () => {
  
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.userdata);

  const handleSendOTP = async (payload: sendOTPPayload, navigation: any) => {
    dispatch(otpRequested());
    try {
      const response = await requestOTP(payload)
      const data = { phonenumber: payload.phoneNo };
      dispatch(otpSuccess({ data }));
      navigation("/getotp");
    } catch (error: any) {
      dispatch(otpFailed(error));
    }
  };


  const handleLogIn = async (payload: any, navigation: any) => {
    dispatch(authRequested());
    try {
      const response:any = await login(payload);
      const userObject:IUserDetails = {
        userID:response.userID, 
        userName: response.username,
        fullname: response.firstName+' '+response.lastName,
        accessToken: response.accessToken
      }
      dispatch(authSuccess({userObject}));

      navigation("/");
    } catch (error) {
      dispatch(authFailed(error));
    }
  };


  const handleLogOut = () => {
    dispatch(logOut());
  };

  return {
    handleSendOTP,
    handleLogIn,
    handleLogOut,
  };
};

export default useAuthService;
