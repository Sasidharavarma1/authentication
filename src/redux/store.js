import { configureStore } from "@reduxjs/toolkit";
import sliceTks from "./slices/SliceTks";
import fetchEventsSlice from "./slices/fetchEvents";
import  fetchUploadedEvents  from "./slices/fetchUploadedEvents";
import addNewSlice from "./slices/AddNew";
import updateEventSlice from "./slices/UpdateEventsSlice"
const store=configureStore({
    reducer:{
        auth:sliceTks,
        event:fetchEventsSlice,
        UploadedEvent:fetchUploadedEvents,
        addNew:addNewSlice,
        updateevents:updateEventSlice
    }
})
export default store;