import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "../app/appSlice";

export const store = configureStore({
  reducer: {
    selector: AppReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
