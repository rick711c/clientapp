import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import {
  addAppoinmentInListSuccess,
  appoinmentListFailure,
  appoinmentListRequested,
  appoinmentListSucess,
  dateSlotFailure,
  dateSlotRequested,
  dateSlotSucess,
  getAppoinmentDetailsFailure,
  getAppoinmentDetailsRequested,
  getAppoinmentDetailsSuccess,
  timeSlotFailure,
  timeSlotRequested,
  timeSlotSucess,
  upcomingAppoinmentFailure,
  upcomingAppoinmentRequested,
  upcomingAppoinmentSucess,
  updateAppoinmentForm,
} from "../silces/userdata.slice";
import {
  IAppoinment,
  appointments,
  dateSlots,
  timeSlots,
} from "../redux.constants";

function* fetchUpcomingAppoinment(
  action: ActionType<typeof upcomingAppoinmentRequested>
) {
  try {
    yield put(upcomingAppoinmentSucess(appointments[5]));
  } catch (error) {
    yield put(upcomingAppoinmentFailure(error));
  }
}

function* fetchAppoinmentList(
  action: ActionType<typeof appoinmentListRequested>
) {
  try {
    const data: IAppoinment[] = appointments;
    yield put(appoinmentListSucess(data));
  } catch (error) {
    yield put(appoinmentListFailure(error));
  }
}

function* fetchDateSlots(action: ActionType<typeof dateSlotRequested>) {
  try {
    yield put(dateSlotSucess(dateSlots));
  } catch (error) {
    yield put(dateSlotFailure(error));
  }
}

function* fetchTimeSlotsBasedOnDate(
  action: ActionType<typeof timeSlotRequested>
) {
  try {
    yield put(timeSlotSucess(timeSlots));
  } catch (error) {
    yield put(timeSlotFailure(error));
  }
}

function* fetchAppoinmentDetails(
  action: ActionType<typeof getAppoinmentDetailsRequested>
) {
  try {
    console.log(appointments[action.payload]);
    yield put(getAppoinmentDetailsSuccess(appointments[action.payload]));
  } catch (error) {
    yield put(getAppoinmentDetailsFailure(error));
  }
}

function* addAppoinmentInListSaga(
  action: ActionType<typeof addAppoinmentInListSuccess>
) {
  try {
    // do necessary api calls here

    yield put(addAppoinmentInListSuccess(action.payload));
  } catch (error) {
    yield put(getAppoinmentDetailsFailure(error));
  }
}

export function* watchFetchUpcomingAppoinment() {
  yield takeEvery(upcomingAppoinmentRequested.type, fetchUpcomingAppoinment);
}

export function* watchFetchAppoinmentList() {
  yield takeEvery(appoinmentListRequested.type, fetchAppoinmentList);
}

export function* watchFetchDateSlots() {
  yield takeEvery(dateSlotRequested.type, fetchDateSlots);
}

export function* watchFetchTimeSlotsBasedOnDate() {
  yield takeEvery(timeSlotRequested.type, fetchTimeSlotsBasedOnDate);
}

export function* watchFetchAppoinmentDetails() {
  yield takeEvery(getAppoinmentDetailsRequested.type, fetchAppoinmentDetails);
}

export function* watchAddAppoinmentinList() {
  yield takeLatest(addAppoinmentInListSuccess.type, addAppoinmentInListSaga);
}
