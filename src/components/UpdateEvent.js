import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import { useParams } from 'react-router-dom';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from "../services/user.service";
import { useNavigate } from "react-router-dom";
function UpdateEvent(props) {
  const { eid } = useParams();
  const { eeventname } = useParams();
  const { eprice } = useParams();
  const { equantity } = useParams();
  //console.log(eid,eeventname,eprice,equantity);
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
  const handleUpdateevent = (e) => {
    e.preventDefault();
    UserService.update(eid, eeventname, price, equantity);
    // }
    navigate("/uploadedevents")
  };
  return (
    <div>

      <div className="col-md-12">
        <div className="card card-container">
          <Form onSubmit={handleUpdateevent} ref={form}>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="eventname">Eventname</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="eventname"
                    value={eventname}
                    disabled
                  // onChange={onChangEventname}

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
                    disabled
                    value={quantity}
                  //onChange={onChangeQuantity}  
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Update Event</button>
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UpdateEvent;