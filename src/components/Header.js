import { useState } from "react";
import { CDN_LINK } from "../utils/constants";

const Header = ()=>{
  const [btnLoginReact, setbtnLogin] = useState("Login");
 return (
  <div className="head">
    <img className="site-logo" src={CDN_LINK}/>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Cart</li>
        <button className="btnLogin" onClick={()=>{
          console.log("btn click");
          btnLoginReact === "Login" ? setbtnLogin("Logout") : setbtnLogin("Login");
        }}>{btnLoginReact}</button>
      </ul>
    </div>
  </div>
  );
};

export default Header;