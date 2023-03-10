import { configureStore } from "@reduxjs/toolkit";
import sliceTks from "./slices/SliceTks";
import fetchEventsSlice from "./slices/fetchEvents";
import  fetchUploadedEvents  from "./slices/fetchUploadedEvents";
const store=configureStore({
    reducer:{
        auth:sliceTks,
        event:fetchEventsSlice,
        UploadedEvent:fetchUploadedEvents
    }
})
export default store;