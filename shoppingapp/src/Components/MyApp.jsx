import React from "react";
import Home from './Home'
import Product from './Product'
import About from './About'
import Contact from './Contact'
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import Login from './Button/example';
import Signup from './Button/Signup';

const MyAppp = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/*" element={<Product/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Redirect to="/"/> */}
      </Routes>
    </>
  );
};

export default MyAppp;
