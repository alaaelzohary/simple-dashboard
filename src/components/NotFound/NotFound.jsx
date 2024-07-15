import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Style from './NotFound.module.css';
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
      <section className="flex justify-center items-start min-h-screen bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-700 dark:text-blue-700">404</h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
      <Link to={"/"} className="inline-flex text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
    </div>   
  </div>
</section>

 )

}