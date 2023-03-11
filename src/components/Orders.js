import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchConfirmedOrders } from '../redux/slices/ConfirmedOrdersSlice';
function Orders() {
    const events = useSelector(state => state.confirmedorder.eventsList);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchConfirmedOrders());
    }, [dispatch]);
        return (
            <div>
                <h1 className="text-center">Confirmed Tickets</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td> Event Name</td>
                            <td> Count of Tickets</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            events.map((event) =>
                                <tr key={event.ticketid}>
                                    <td> {event.eventname}</td>
                                    <td> {event.buyticks}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }


export default Orders;