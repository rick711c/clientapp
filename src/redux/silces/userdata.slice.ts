import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAppointment,
  IAppointmentInitialState,
  IDateSlots,
  IDateSlotsInitialStates,
  ITimeslots,
  UserData,
  UserDataInitialState,
} from "../redux.constants";
// Redux Toolkit slice
export const userDataSlice = createSlice({
  name: "userdata",
  initialState: UserDataInitialState,

  reducers: {
    upcomingAppointmentRequested: (state: UserData) => {
      return {
        ...state,
        upcomingAppointment: {
          ...state.upcomingAppointment,
          loading: true,
        },
      };
    },
    upcomingAppointmentSuccess: (
      state: UserData,
      action: PayloadAction<IAppointment>
    ) => {
      return {
        ...state,
        upcomingAppointment: {
          data: { ...action.payload },
          loading: false,
          error: {},
        },
      };
    },

    upcomingAppointmentFailure: (
      state: UserData,
      action: PayloadAction<any>
    ) => {
      return {
        ...state,
        upcomingAppointment: {
          data: IAppointmentInitialState,
          error: action.payload,
          loading: false,
        },
      };
    },

    appointmentListRequested: (state: UserData) => {
      return {
        ...state,
        appointmentList: {
          ...state.appointmentList,
          loading: true,
        },
      };
    },
    appointmentListSuccess: (
      state: UserData,
      action: PayloadAction<IAppointment[]>
    ) => {
      return {
        ...state,
        appointmentList: {
          ...state.appointmentList,
          data: action.payload,
          loading: false,
        },
      };
    },

    appointmentListFailure: (state: UserData, action: PayloadAction<any>) => {
      return {
        ...state,
        appointmentList: {
          data: [],
          error: action.payload,
          loading: false,
        },
      };
    },

    dateSlotRequested: (state: UserData) => {
      return {
        ...state,
        dateSlots: {
          ...state.dateSlots,
          loading: true,
        },
      };
    },
    dateSlotSuccess: (state: UserData, action: PayloadAction<IDateSlots[]>) => {
      return {
        ...state,
        dateSlots: {
          data: action.payload,
          loading: false,
          error: {},
        },
      };
    },

    dateSlotFailure: (state: UserData, action: PayloadAction<any>) => {
      return {
        ...state,
        dateSlots: {
          data: [],
          error: action.payload,
          loading: false,
        },
      };
    },

    timeSlotRequested: (state: UserData) => {
      return {
        ...state,
        timeSlots: {
          ...state.timeSlots,
          loading: true,
        },
      };
    },
    timeSlotSuccess: (state: UserData, action: PayloadAction<ITimeslots[]>) => {
      return {
        ...state,
        timeSlots: {
          data: action.payload,
          loading: false,
          error: {},
        },
      };
    },

    timeSlotFailure: (state: UserData, action: PayloadAction<any>) => {
      return {
        ...state,
        timeSlots: {
          data: [],
          error: action.payload,
          loading: false,
        },
      };
    },

    getAppointmentDetailsRequested: (
      state: UserData,
      action: PayloadAction<number>
    ) => {
      return {
        ...state,
        currentAppointmentDetails: {
          ...state.currentAppointmentDetails,
          loading: true,
        },
      };
    },

    getAppointmentDetailsSuccess: (
      state: UserData,
      action: PayloadAction<IAppointment>
    ) => {
      return {
        ...state,
        currentAppointmentDetails: {
          ...state.currentAppointmentDetails,
          loading: false,
          data: action.payload,
        },
      };
    },

    getAppointmentDetailsFailure: (
      state: UserData,
      action: PayloadAction<any>
    ) => {
      return {
        ...state,
        currentAppointmentDetails: {
          ...state.currentAppointmentDetails,
          loading: false,
          error: action.payload,
        },
      };
    },

    //   createAppointment:()

    clearUserData: (state: UserData) => {
      return {
        ...UserDataInitialState,
      };
    },

   /**
    * @pupose :- it will update the appointmentForm details of upcomingappointment object of userdata in redux;
    * @param state : this tpye of data is present in redux which need to updated 
    * @param action : payloadaction has the new datas for updating userdata
    */
    updateAppointmentForm: (state: UserData, action: PayloadAction<any>) => {
      return {
        ...state,
        appointmentForm: {  ...state.appointmentForm, ...action.payload },
      };
    },
    addAppointmentInListRequested: (state: UserData, action: PayloadAction<any>) => {
      return {
        ...state,
        appointmentForm: { ...state.appointmentForm, loading: true },
      };
    },
    addAppointmentInListSuccess: (
      state: UserData,
      action: PayloadAction<IAppointment>
    ) => {
      return {
        ...state,
        appointmentList: {
          ...state.appointmentList,
          data: [action.payload, ...state.appointmentList.data],
        },
      };
    },
  },
});

export const {
  upcomingAppointmentFailure,
  upcomingAppointmentRequested,
  upcomingAppointmentSuccess,
  appointmentListFailure,
  appointmentListRequested,
  appointmentListSuccess,
  timeSlotFailure,
  timeSlotRequested,
  timeSlotSuccess,
  dateSlotFailure,
  dateSlotRequested,
  dateSlotSuccess,
  clearUserData,
  getAppointmentDetailsSuccess,
  getAppointmentDetailsRequested,
  getAppointmentDetailsFailure,
  addAppointmentInListSuccess,
  addAppointmentInListRequested,
  updateAppointmentForm,
} = userDataSlice.actions;

export const userDataReducer = userDataSlice.reducer;
