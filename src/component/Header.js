import { LOGO_URL } from "../utils/contains";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  //This state does'nt just re-render our button is re-renders our whole header component
  const [btnNameReact, setBtnNameReact] = useState("Login")

  const onLineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
         <li className="status">
         Online:<span
         className={`status-dot ${onLineStatus ? "online" : "offline"}`}
          />
      </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button className="login-btn" onClick={() => {
              btnNameReact === "Login" 
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
          }}>{ btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
