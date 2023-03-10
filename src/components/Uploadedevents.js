import React from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUploadedEvents } from '../redux/slices/fetchUploadedEvents';
import { useEffect } from "react";

function Uploadedevents() {
    const events = useSelector(state => state.UploadedEvent.eventsList);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUploadedEvents());
    }, [dispatch]);
  
    return (
        <div>
            <h1 className="text-center"> Events Uploaded</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td> Event Name</td>
                        <td> Price</td>
                        <td> Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map((event) =>
                            <tr key={event.eventid}>
                                <td> {event.eventname}</td>
                                <td> {event.price}</td>
                                <td> {event.quantity}</td>
                                <td>
                                    <Link to={`/update/${event.eventid}/${event.eventname}/${event.price}/${event.quantity}`}>
                                        <span className="bg-success button">Update</span>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Uploadedevents;