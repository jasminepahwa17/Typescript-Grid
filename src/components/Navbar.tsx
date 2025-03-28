import { Link } from "react-router-dom"
import logo from "../assets/Gsynergy.svg"
import user from "../assets/user.svg"
import arrow from "../assets/arrow.svg"
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { logout, isAuthenticated } = useAuth();
    console.log(isAuthenticated);
    

    return (
        <div className=" bg-white h-20 z-50 shadow p-2 flex items-center justify-between">
            <Link to="/" >
                <img src={logo} className="w-40" />
            </Link>
            <h1>Data Viewer App</h1>

            <div>
                <div className="flex cursor-pointer" onClick={()=> setIsOpen(!isOpen)}>
                    <img src={user} className="w-10" />
                    <img src={arrow} className="w-6" />
                </div>
            </div>
        {isOpen && (
          <div
            className="absolute right-2 top-22 w-40 bg-white shadow-lg rounded-md overflow-hidden"
            role="menu"
          >
            <ul className="text-gray-700">
            {isAuthenticated ?
              <li>
                <Link
                  to="/login"
                  onClick={logout}
                  className="block px-4 py-2 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </Link>
              </li> : 
                <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-gray-100"
                  role="menuitem"
                >
                  
                  Login
                </Link>
              </li> }
            </ul>
          </div>
        )}
        </div>
    )
}

export default Navbar
