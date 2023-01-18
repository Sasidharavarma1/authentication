import React from "react";
import UserService from "../services/user.service";
import { Link } from 'react-router-dom'
class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        UserService.getallordersofuser().then((response) => {
            this.setState({ events: response.data })
        });
    }
    render() {
        return (
            <div className="col-12  col-md-8">
                <h1 className="text-center"> Orders in cart</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Eventname</td>
                            <td>Quantity</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.events.map((event) =>
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
}
export default Cart;