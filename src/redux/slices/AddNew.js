import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";
export const addNew = createAsyncThunk(
  "events/add",
  async ({ eventname, price, quantity}) => {
    const response=await UserService.addnew(eventname,price,quantity);
    return response;
  }
);
const initialState = {
    Status:""
}
const addNewSlice = createSlice({
  name: "addNew",
  initialState,
  extraReducers: {
    [addNew.fulfilled]: (state, action) => {
      state.Status = true;
    },
    [addNew.rejected]: (state, action) => {
      state.Status= false;
    },
    [addNew.fulfilled]: (state, action) => {
      state.Status = false;
    },
  },
});
const { reducer } = addNewSlice;
export default reducer;