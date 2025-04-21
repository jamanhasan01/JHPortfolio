import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../shared/ErrorPage";
import Home from "../pages/Home/Home";
import Projects from "../pages/Home/Projects";
import About from "../pages/Home/About";
import Contact from "../pages/Home/Contact";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,  // Makes this the default route for '/'
        element: <Home />
      },
      {
        path: 'home',  // Changed from '/home' to relative path
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },

    ]
  }
]);

export default router;