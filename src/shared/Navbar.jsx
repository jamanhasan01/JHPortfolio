import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; // Add these imports
import logo from "../assets/logo.png";
import ThemeMode from "../Components/ThemeMode";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 `}>
      <div className={`navbar justify-between max-w-lg rounded-full border-gray-500 py-0 mt-2 bg-gray-600 bg-opacity-20 relative  border mx-auto ${isScrolled ? "bg-opacity-70" : ""}`}>
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <div>
            <img className="w-11 h-11 bg-gray-700 rounded-full p-1" src={logo} alt="" />
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal text-base">{navItems}</ul>
        </div>
        <div>
        <ThemeMode/>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;