import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";
import ThemeToggle from "./ThemeToggle";

const HeaderComponent = () => {
  const [loginText, setLoginText] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <div className="flex justify-between items-center px-10 py-2 border-b border-gray-100">
      <div className="flex items-center w-48 gap-2">
        <img src={LOGO_URL} alt="logo" className="h-14" />
        <p className="text-gray-800 dark:text-white">Food Delivery</p>
      </div>
      <div>
        <ul className="flex justify-between items-center gap-4  dark:text-white">
          <li>{isOnline ? "Online 💚" : "Offline ❤️"}</li>
          <Link className="nav-items-list dark:text-white" to="/">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/groceries">Groceries</Link>
          <ThemeToggle />
          <button
            className="px-4 py-2 border border-black dark:border-white dark:bg-black rounded-lg bg-gray-300 cursor-pointer"
            onClick={() => {
              setLoginText(prev => (prev === "Login" ? "Logout" : "Login"));
            }}
          >
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
