import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../../pages/Login";

const PrivateRoute = () => {
  const user = useSelector((state) => state.user.currentUser); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Navigate to="/" /> : <Login />;
};

export default PrivateRoute;
