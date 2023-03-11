import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";
export const fetchUploadedEvents = createAsyncThunk(
    "events/fetchUploadedEvents",
    async () => {
      const response = await UserService.getUploadedContent();
      console.log(response.data);
      return response.data;
    }
  );

const initialState = {
    eventStatus: "",
    eventsList: [],
    event:{}
  };  
const fetchUploadedEventsSlice = createSlice({
    name: "UploadedEvent",
    initialState,
    extraReducers: (builder)=>{
      builder.addCase(fetchUploadedEvents.fulfilled,(state,action)=>{
        state.eventsList=action.payload;
      })
      builder.addCase(fetchUploadedEvents.pending,(state,action)=>{
        state.eventStatus="pending";
      })
     
    }
  });
  
  const { reducer } = fetchUploadedEventsSlice;
  export default reducer;  
