import React from "react";
import UserService from "../services/user.service";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchOrders } from "../redux/slices/CartSlice";
import { useEffect } from "react";

function Cart() {
    const events = useSelector(state => state.order.eventsList);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchOrders());
    }, [dispatch]);
        return (
            <div className="col-12  col-md-8">
                <h1 className="text-center"> Orders in cart</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Eventname</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>      </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            events.map(event =>
                                <tr key={event.orderid}>
                                    <td> {event.eventname}</td>
                                    <td> {event.quantity}</td>
                                    <td>{event.totalprice}</td>
                                    <td>
                                        <Link to={`/payment/${event.orderid}`}>
                                            <span className="bg-success button">Proceed</span>
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
export default Cart;