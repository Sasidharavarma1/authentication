import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from "../services/user.service";
class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        UserService.getallticketsofuser().then((response) => {
            this.setState({ events: response.data })
        });
    }
    render() {
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
                            this.state.events.map((event) =>
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
}

export default Orders;