import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./silces";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import persistReducer from "redux-persist/es/persistReducer";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from "redux-logger";
import rootSaga from "./sagas/rootSaga";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "patientApp",
  storage: storage,
};

const sagamiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger, sagamiddleware),
});

sagamiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
