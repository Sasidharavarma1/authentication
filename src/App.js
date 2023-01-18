import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import EventBus from "./common/EventBus";
import Myorders from "./components/Myorders";
import Uploadedevents from "./components/Uploadedevents";
import Addnew from "./components/Addnew";
import UpdateEvent from "./components/UpdateEvent";
import Cart from "./components/Cart";
import Payment from "./components/Payment"
import Orders from "./components/Orders";
const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();

    setCurrentUser(undefined);
  };
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-danger">
        <Link to={"/"} className="navbar-brand">
          Ticketing System
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/orders"} className="nav-link">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/cart"} className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addnew"} className="nav-link">
                Add New
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/uploadedevents"} className="nav-link">
                Uploaded
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myorders" element={<Myorders />} />
          <Route path="/addnew" element={<Addnew />} />
          <Route path="/uploadedevents" element={<Uploadedevents />} />
          <Route path="/update/:eid/:eeventname/:eprice/:equantity" element={<UpdateEvent />} />
          <Route path="/order/:id" element={<Myorders />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};
export default App; 