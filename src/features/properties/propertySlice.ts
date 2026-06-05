import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { getProperties } from "./propertyService";

export const fetchProperties =
  createAsyncThunk(
    "properties/fetchProperties",
    async () => {
      return await getProperties();
    }
  );

interface PropertyState {
  properties: any[];
  loading: boolean;
  error: string | null;
}

const initialState: PropertyState = {
  properties: [],
  loading: false,
  error: null,
};

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProperties.pending,
        (state) => {
          state.loading = true;
        }
      )
      .addCase(
        fetchProperties.fulfilled,
        (state, action) => {
          state.loading = false;
          state.properties = action.payload;
        }
      )
      .addCase(
        fetchProperties.rejected,
        (state) => {
          state.loading = false;
          state.error =
            "Failed to load properties";
        }
      );
  },
});

export default propertySlice.reducer;