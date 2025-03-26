import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../shared/ErrorPage";
import Home from "../pages/Home/Home";
import Projects from "../pages/Home/Projects";
import About from "../pages/Home/About";
import { Contact } from "lucide-react";


let router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
           
        ]
    }
])

export default router