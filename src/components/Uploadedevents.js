import React from "react";
import UserService from "../services/user.service";
import { Link } from 'react-router-dom'
class Uploadedevents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        UserService.getUploadedContent().then((response) => {
            this.setState({ events: response.data })
        });
    }
    render() {
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
                            this.state.events.map((event) =>
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
}
export default Uploadedevents;