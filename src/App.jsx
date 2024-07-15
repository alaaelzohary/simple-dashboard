import { useContext, useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DataContextProvider from './context/DataContext';
import Charts from './components/Charts/Charts';
import NotFound from './components/NotFound/NotFound';

function App() {

  const routes = createBrowserRouter(
    [{
     path:"/",
     element: <Layout/>,
     children:[
      {path:"/simple-dashboard" , element: <Home/>},
    {path:"/simple-dashboard/charts/:id", element: <Charts/>},
  {path:"*", element:<NotFound/>}
     ]
    }]
  )

  return (
    <>
    <DataContextProvider>
    <RouterProvider router={routes} />
    </DataContextProvider>
    </>
  )
}

export default App
