
import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu"
//import Grocery from "./component/Grocery";//instead of importing my Grocery like this we use lazy loading because we have 
// a lot of child component in it which might slow our page down

// All this names means and does the same thing, it help boundles our pages properly
//Lazy Loading = When our app home page loads it will not load the code grocery until we go to the grocery page then it will load it this called lazy loading.
// Chunking
//Code Splitting
//Dynamic Bonding
// on demand loading


const Grocery = lazy(() => import("./component/Grocery"));//this the proper way import lazy loading

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [

      {
        path: "/",
        element: <Body />
      },
        
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/grocery",
    element: <Suspense fallback={<h1>Loading....</h1>}>
      <Grocery />
      </Suspense>,
  },
  //This is our dynamic part, this is expected to be different from the restaurant like (KFC, MAC DONALD)

  //The resId means that it is dynamic, it means that resId can change according to the restaurant

  //So resId is the id of each restaurant
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu />
  }
    ],
    errorElement: <Error />,
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//RouterProvider has now rendered the configuration to our page
root.render(<RouterProvider router={appRouter} /> );