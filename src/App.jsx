import { useContext, useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DataContextProvider from './context/DataContext';
import Charts from './components/Charts/Charts';

function App() {

  const routes = createBrowserRouter(
    [{
     path:"/",
     element: <Layout/>,
     children:[
      {index:true , element: <Home/>},
    {path:"/charts/:id", element: <Charts/>},
  {path:"*", element:<h1 className='text-center'>Page Not Found</h1>}
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
