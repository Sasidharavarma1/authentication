import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import { useParams } from 'react-router-dom';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pay } from "../redux/slices/PaymentSlice";
function Payment(props) {
  const dispatch=useDispatch();
  const { id } = useParams();
  const form = useRef();
  const checkBtn = useRef();
  const [creditcardno, setCreditcardno] = useState("");
  const [expiry, setExpiry] = useState("");
  const [successful, setSuccessful] = useState(false);
  const onChangcreditcardno = (e) => {
    const creditcardno = e.target.value;
    setCreditcardno(creditcardno);
  };
  const onChangeExpiry = (e) => {
    const expiry = e.target.value;
    setExpiry(expiry);
  };

  const navigate = useNavigate();
  const handlePaymentDetails = (e) => {
    e.preventDefault();
    dispatch(pay({ id,creditcardno,expiry }))
      .unwrap()
      .then(() => {
        navigate("/orders")
        window.location.reload();
      })  
  };
  return (
    <div>
      <h1>Payment Module</h1>
      <div className="col-md-12">
        <div className="card card-container">
          <Form onSubmit={handlePaymentDetails} ref={form}>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="creditcardno">CreditCardNo</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="creditcardno"
                    value={creditcardno}
                    onChange={onChangcreditcardno}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiry">Expiry</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="expiry"
                    value={expiry}
                    onChange={onChangeExpiry}
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Add Details</button>
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

export default Payment;