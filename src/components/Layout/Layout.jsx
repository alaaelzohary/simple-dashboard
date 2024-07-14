import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Style from './Layout.module.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  
    return (
  <>
  <Navbar/>
  <div className=" w-[85%] mx-auto py-20">
  <Outlet/>
  </div>
  <Footer/>
  </>
 )

}