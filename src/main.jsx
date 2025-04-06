
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import React from 'react';
import ReactDOM from "react-dom/client"; 
import Error from './components/Error';
import RestaurantCard from './components/RestaurantCard';
import RestaurantMenu from './pages/RestaurantMenu';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        errorElement:<Error />
      },
      {
        path:"/about",
        element:<About/>,
        errorElement:<Error />
      },
      {
        path:"/ContactUs",
        element:<ContactUs/>,
        errorElement:<Error/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />,
        errorElement:<Error/>
      }
    ],
    errorElement:<Error/>
  }
 

]);
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>);
