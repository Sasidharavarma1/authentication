import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";
import axios from "axios";
export const fetchEvents = createAsyncThunk(
    "events/fetchEvents",
    async () => {
      const response = await axios.get("http://localhost:7083/api/getallevents");
      console.log(response.data);
      return response.data;
    }
  );

const initialState = {
    eventStatus: "",
    eventsList: [],
    event:{}
  };  
const fetchEventsSlice = createSlice({
    name: "event",
    initialState,
    extraReducers: (builder)=>{
      builder.addCase(fetchEvents.fulfilled,(state,action)=>{
        state.eventsList=action.payload;
      })
      builder.addCase(fetchEvents.pending,(state,action)=>{
        state.eventStatus="pending";
      })
     
    }
  });
  
  const { reducer } = fetchEventsSlice;
  export default reducer;  
