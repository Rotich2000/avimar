import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <input
        style={{
          margin: "20px",
          padding: "10px",
          border: "1px solid #0099ff",
          borderRadius: "5px",
          outline: "0",
          width: "500px",
          fontSize: "18px",
          textAlign: "center",
        }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{
          margin: "20px",
          padding: "10px",
          border: "1px solid #0099ff",
          borderRadius: "5px",
          outline: "0",
          width: "500px",
          fontSize: "18px",
          textAlign: "center",
        }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "10px",
          width: "100px",
          backgroundColor: "transparent",
          outline: "0",
          border: "1px solid #0099ff",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
