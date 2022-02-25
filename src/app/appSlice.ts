import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Selection = "select" | "not select";

export interface SelectedState {
  nobleValue: boolean;
  carValue: boolean;
  nobleStatus: Selection;
  carStatus: Selection;
  nobleName?: string;
}

const initialState: SelectedState = {
  nobleValue: false,
  carValue: false,
  nobleStatus: "not select",
  carStatus: "not select",
};

export const appSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {
    nobleSelect: (state) => {
      state.nobleValue = true;
      state.nobleStatus = "select";
      state.carValue = false;
      state.carStatus = "not select";
    },
    carSelect: (state) => {
      state.nobleValue = false;
      state.nobleStatus = "not select";
      state.carValue = true;
      state.carStatus = "select";
    },

    enterName: (state, action: PayloadAction<string>) => {
      state.nobleName = action.payload;
    },
  },
});

export const { nobleSelect, carSelect, enterName } = appSlice.actions;

export const nobleState = (state: RootState) => state.selector.nobleValue;
export const carState = (state: RootState) => state.selector.carValue;
export const nobleName = (state: RootState) => state.selector.nobleName;

export default appSlice.reducer;
