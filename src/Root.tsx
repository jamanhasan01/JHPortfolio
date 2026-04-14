import Footer from "next/src/components/shared/Footer";
import Navbar from "next/src/components/shared/Navbar";
import { Outlet } from "react-router-dom";

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
