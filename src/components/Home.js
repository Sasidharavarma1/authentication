import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../redux/slices/fetchEvents';

function Home() {
  const events = useSelector(state => state.event.eventsList);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center"> Events Available</h1>


      <table className="table table-striped">
        <thead>
          <tr>
            <td> Event Name</td>
            <td> Price</td>
            <td> Quantity</td>
            <td>         </td>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.eventid}>
              <td> {event.eventname}</td>
              <td> {event.price}</td>
              <td> {event.quantity}</td>
              <td>
                <Link to={`/order/${event.eventid}`}>
                  <span className="button">Order</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Home;
