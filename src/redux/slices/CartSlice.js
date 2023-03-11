import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";
export const fetchOrders = createAsyncThunk(
    "orders/fetchallofuser",
    async () => {
      const response = await UserService.getallordersofuser()
      return response.data;
    }
  );

const initialState = {
    eventStatus: "",
    eventsList: [],
    event:{}
  };  
const fetchOrdersSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: (builder)=>{
      builder.addCase(fetchOrders.fulfilled,(state,action)=>{
        state.eventsList=action.payload;
      })
      builder.addCase(fetchOrders.pending,(state,action)=>{
        state.eventStatus="pending";
      })
     
    }
  });
  
  const { reducer } = fetchOrdersSlice;
  export default reducer;  
