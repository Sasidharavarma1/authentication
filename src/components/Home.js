import React from "react";
import { Link } from 'react-router-dom'
import UserService from "../services/user.service";
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        UserService.getPublicContent().then((response) => {
            this.setState({ events: response.data })
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center"> Events Available</h1>
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
                            this.state.events.map(
                                (event) =>
                                    <tr key={event.eventid}>
                                        <td> {event.eventname}</td>
                                        <td> {event.price}</td>
                                        <td> {event.quantity}</td>
                                        <td>
                                            <Link to={`/order/${event.eventid}`}>
                                                <span className="bg-success button">Order</span>
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
export default Home;