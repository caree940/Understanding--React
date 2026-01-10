import { LOGO_URL } from "../utils/contains";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  //This state does'nt just re-render our button is re-renders our whole header component
  const [btnNameReact, setBtnNameReact] = useState("Login")

  const onLineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between sticky top-0 z-50 shadow-md bg-white m-2">
      <div className="logoContainer">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-3">
         <li className="status px-4 font-semibold">
         Online:<span
         className={`status-dot ${onLineStatus ? "online" : "offline"}`}
          />
      </li>
          <li className="px-4 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
         <button className="login-btn py-2 px-4 bg-red-400 rounded-lg mr-3 font-semibold text-md" onClick={() => {
              btnNameReact === "Login" 
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
          }}>{ btnNameReact}</button>
      </div>
    </div>
  );
};

export default Header;
