import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";
export const order = createAsyncThunk(
  "events/order",
  async ({id, quantity }) => {
    const response=await UserService.order(id, quantity);
    return response;
  }
);
const initialState = {
    Status:""
}
const orderSlice = createSlice({
  name: "orderEvent",
  initialState,
  extraReducers: {
    [order.fulfilled]: (state, action) => {
      state.Status = true;
    },
    [order.rejected]: (state, action) => {
      state.Status= false;
    },
    [order.fulfilled]: (state, action) => {
      state.Status = false;
    },
  },
});
const { reducer } = orderSlice;
export default reducer;