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

import {
  appoinmentListRequested,
  appoinmentListSucess,
  dateSlotRequested,
  dateSlotSucess,
  timeSlotRequested,
  timeSlotSucess,
  upcomingAppoinmentRequested,
  upcomingAppoinmentSucess,
} from "../redux/silces/userdata.slice";
import { RootState } from "../redux";
import { appointments, dateSlots, timeSlots } from "../redux/redux.constants";

export interface sendOTPPayload {
  phoneNumber: string;
  otherDetails?: any;
}
const useAuthService = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.userdata);
  const handleSendOTP = async (payload: sendOTPPayload, navigation: any) => {
    dispatch(otpRequested());
    try {
      // const response = await apiServices.logInCall(payload);
      const data = { phonenumber: payload.phoneNumber };
      dispatch(otpSuccess({ data }));
      navigation("/getotp");
    } catch (error: any) {
      dispatch(otpFailed(error));
    }
  };

  const handleLogIn = async (payload: any, navigation: any) => {
    dispatch(authRequested());
    try {
      dispatch(authSuccess({}));

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
