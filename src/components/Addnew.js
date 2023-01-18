import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from "../services/user.service";
import { useNavigate } from "react-router-dom";
const Addnew = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [eventname, setEventname] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [successful, setSuccessful] = useState(false);

  const onChangEventname = (e) => {
    const eventname = e.target.value;
    setEventname(eventname);
  };
  const onChangePrice = (e) => {
    const price = e.target.value;
    setPrice(price);
  };
  const onChangeQuantity = (e) => {
    const quantity = e.target.value;
    setQuantity(quantity);
  };
  const navigate = useNavigate();
  const handleAddevent = (e) => {
    e.preventDefault();
    UserService.addnew(eventname, price, quantity);
    // }
    navigate("/home")
  };
  return (
    <div className="col-6 col-md-12">
      <div className="card card-container">

        <Form onSubmit={handleAddevent} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="eventname">Eventname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="eventname"
                  value={eventname}
                  onChange={onChangEventname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <Input
                  type="number"
                  className="form-control"
                  name="price"
                  value={price}
                  onChange={onChangePrice}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <Input
                  type="number"
                  className="form-control"
                  name="quantity"
                  value={quantity}
                  onChange={onChangeQuantity}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Add Event</button>
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};
export default Addnew;