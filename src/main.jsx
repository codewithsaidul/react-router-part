import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './components/home/Home.jsx';
import About from './components/About/About.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,

    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/app',
        element: <App></App>
      }
    ]
  },
  {
    path: '/about',
    element: <div>I am in about page</div>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
