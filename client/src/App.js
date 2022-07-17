import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import PrivateRoute from "./components/routing/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<PrivateRoute />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
