import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";
export const fetchConfirmedOrders = createAsyncThunk(
    "orders/getconfirmedofuser",
    async () => {
      const response = await UserService.getallticketsofuser();
      return response.data;
    }
  );

const initialState = {
    eventStatus: "",
    eventsList: [],
    event:{}
  };  
const fetchConfirmedOrdersSlice = createSlice({
    name: "confirmedorder",
    initialState,
    extraReducers: (builder)=>{
      builder.addCase(fetchConfirmedOrders.fulfilled,(state,action)=>{
        state.eventsList=action.payload;
      })
      builder.addCase(fetchConfirmedOrders.pending,(state,action)=>{
        state.eventStatus="pending";
      })
     
    }
  });
  
  const { reducer } = fetchConfirmedOrdersSlice;
  export default reducer;  
