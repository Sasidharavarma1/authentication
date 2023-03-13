import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/SliceTks";
import '../css/LoginandSignUp.css'
const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useRef();
  const checkBtn = useRef();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUserName(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); 
    dispatch(login({ userName, password }))
      .unwrap()
      .then(() => {
        navigate("/home");
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        setErrorMessage("Your username or password is incorrect."); 
      });
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={userName}
              onChange={onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          {errorMessage && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
