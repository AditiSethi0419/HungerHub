
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
// import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import React , {lazy , Suspense} from 'react';
import ReactDOM from "react-dom/client"; 
import Error from './components/Error';
// import RestaurantCard from './components/RestaurantCard';
import RestaurantMenu from './pages/RestaurantMenu';
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));


// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt

const About = lazy(() => import("./pages/About/index.jsx"));

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
        element:(
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
        errorElement:<Error />
      },
      {
        path:"/ContactUs",
        element:<ContactUs/>,
        errorElement:<Error/>
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />,
        errorElement:<Error/>
      },
      {
        path:"/cart",
        element:<Cart />,
        errorElement:<Error/>
      }
    ],
    errorElement:<Error/>
  }
 

]);
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>);
