import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Style from './Home.module.css';
import Charts from "../Charts/Charts";
import CustomerService from "../CustomerService/CustomerService";

export default function Home() {
 const [counter, setCounter] = useState(0);
 useEffect(()=>{},[])
 
    return (
    <div>
 <CustomerService/>       
   </div>
 )

}