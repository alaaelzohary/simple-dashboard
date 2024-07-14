import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Style from './Footer.module.css';

export default function Footer() {
 const [counter, setCounter] = useState(0);
 useEffect(()=>{},[])
 
    return (
    <div className="bg-slate-200 p-8">
         <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 A&B. All Rights Reserved.
         </span>
  </div>
 )

}