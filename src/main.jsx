import { StrictMode } from 'react'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import React from 'react';
import ReactDOM from "react-dom/client"; 
import Error from './components/Error';

// const root = ReactDOM.createRoot(document.getElementById('root')).render(

//     <App />

// )


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<Error />
  },
  {
    path:"/about",
    element:<About />,
    errorElement:<Error />
  },
  {
    path:"/ContactUs",
    element:<ContactUs />,
    errorElement:<Error />
  }

]);
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>);
