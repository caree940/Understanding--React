
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu"



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