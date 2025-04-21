import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const Root = () => {
  return (
    <div>
     <header>
     <Navbar></Navbar>
     </header>
       <main>
       <Outlet />
       </main>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
