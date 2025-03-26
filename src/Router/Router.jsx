import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../shared/ErrorPage";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

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
                path:'/contect',
                element:<Contact></Contact>
            },
           
        ]
    }
])

export default router