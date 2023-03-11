import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";
export const pay = createAsyncThunk(
  "events/pay",
  async ({id, creditcardno, expiry }) => {
    const response=await UserService.paymentdetail(id, creditcardno, expiry);
    console.log(id);
    return response;
  }
);
const initialState = {
    Status:""
}
const paySlice = createSlice({
  name: "payprocess",
  initialState,
  extraReducers: {
    [pay.fulfilled]: (state, action) => {
      state.Status = true;
    },
    [pay.rejected]: (state, action) => {
      state.Status= false;
    },
    [pay.fulfilled]: (state, action) => {
      state.Status = false;
    },
  },
});
const { reducer } = paySlice;
export default reducer;