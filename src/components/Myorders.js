import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import { useParams } from 'react-router-dom';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from "../services/user.service";
import { useNavigate } from "react-router-dom";
function Myorders(props) {
  const { id } = useParams();
  const form = useRef();
  const checkBtn = useRef();
  const [successful, setSuccessful] = useState(false);
  const [quantity, setquantity] = useState("");
  const onChangeQuantity = (e) => {
    const quantity = e.target.value;
    setquantity(quantity);
  };
  const navigate = useNavigate();
  const handleOrder = (e) => {
    e.preventDefault();
    UserService.order(id, quantity);
    // }
    navigate("/cart")
  };
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={handleOrder} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="quantity">How Many Tickets you want to buy?</label>
                <Input
                  type="number"
                  className="form-control"
                  name="quantity"
                  value={quantity}
                  onChange={onChangeQuantity}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Order</button>
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>

      </div>

    </div>

  );
}

export default Myorders;