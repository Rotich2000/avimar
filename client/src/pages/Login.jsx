import React, { useState } from "react";
// import { mobile } from "../responsive";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import image from "../images/Avimar.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <>
      <div className="login-card-container">
        <div className="login-card">
          <div className="login-card-logo">
            <img src={image} alt="logo" />
          </div>
          <div className="login-card-header">
            <h1>Sign In</h1>
            <div>Please login to use the platform</div>
          </div>
          <form className="login-card-form">
            <div className="form-item">
              <span className="form-item-icon material-symbols-rounded">
                person
              </span>
              <input
                type="text"
                name=""
                placeholder="Enter username!"
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
              ></input>
            </div>

            <div className="form-item">
              <span className="form-item-icon material-symbols-rounded">
                lock
              </span>
              <input
                type="password"
                name=""
                placeholder="Enter password!"
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
              ></input>
            </div>
            <div className="form-item-other">
              <div className="checkbox">
                <input type="checkbox" name="" id="rememberMe"></input>
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <a href="#">I forgot my password!</a>
            </div>
            <button onClick={handleClick} disabled={isFetching}>
              Sign In
            </button>
            {error ? (
              " "
            ) : (
              <span style={{ color: "red" }}>Incorrect credentials!!</span>
            )}
          </form>
          <div className="login-card-footer">
            Don't have an account?{" "}
            <Link to="/register">Create a free account</Link>.
          </div>
        </div>
        <div className="login-card-social">
          <div>Other Sign-in platform</div>
          <div className="login-card-social-btn">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-twitter"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
