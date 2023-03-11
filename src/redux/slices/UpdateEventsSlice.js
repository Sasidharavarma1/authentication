import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";
export const updateEventPrice = createAsyncThunk(
  "user/updateeventprice",
  async ({ eid,eeventname,price,equantity }) => {
    const response=await UserService.update(eid,eeventname,price,equantity);
    return response;
  }
);
const initialState = {
  Status:""
}
const updateEventSlice = createSlice({
name: "addNew",
initialState,
extraReducers: {
  [updateEventPrice.fulfilled]: (state, action) => {
    state.Status = true;
  },
  [updateEventPrice.rejected]: (state, action) => {
    state.Status= false;
  },
  [updateEventPrice.fulfilled]: (state, action) => {
    state.Status = false;
  },
},
});
const { reducer } = updateEventSlice;
export default reducer;