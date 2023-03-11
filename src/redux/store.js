import { configureStore } from "@reduxjs/toolkit";
import sliceTks from "./slices/SliceTks";
import fetchEventsSlice from "./slices/fetchEvents";
import  fetchUploadedEvents  from "./slices/fetchUploadedEvents";
import addNewSlice from "./slices/AddNew";
import updateEventSlice from "./slices/UpdateEventsSlice";
import orderSlice from "./slices/MyOrdersSlice";
import fetchOrdersSlice from "./slices/CartSlice";
import paySlice from "./slices/PaymentSlice";
import fetchConfirmedOrdersSlice from "./slices/ConfirmedOrdersSlice"
const store=configureStore({
    reducer:{
        auth:sliceTks,
        event:fetchEventsSlice,
        UploadedEvent:fetchUploadedEvents,
        addNew:addNewSlice,
        updateevents:updateEventSlice,
        orderEvent:orderSlice,
        order:fetchOrdersSlice,
        payprocess:paySlice,
        confirmedorder:fetchConfirmedOrdersSlice
    }
})
export default store;