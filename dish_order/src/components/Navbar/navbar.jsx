import React from "react";
import { useState } from "react";
import "./navbar.css";
 
const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
        <img src="https://i.pinimg.com/736x/0e/43/70/0e4370bd8efadf1dc9108e03c235d142.jpg" alt="logo" className="logo" />
        {/* <img src="https://i.pinimg.com/736x/aa/89/42/aa89427a41223ba8954aad5923144c6e.jpg" alt="cart" className="cart" /> */}
        
        <ul className="navbar-menu">
            <li><a href="#" className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</a></li>
            <li><a href="#" className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</a></li>
            <li><a href="#" className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>mobile-app</a></li>
            <li><a href="#" className={menu === "contact" ? "active" : ""} onClick={() => setMenu("contact")}>contact</a></li>
        </ul>

        <div className="navbar-right">
            <img src="https://i.pinimg.com/736x/79/ce/10/79ce10e4c34077215b988139aec41dbe.jpg" alt="cart" className="search" />

            <div className="navbar-search-icon">
                <img src="https://i.pinimg.com/1200x/14/e5/7b/14e57b6b52dba681c65b045b221c2623.jpg" alt="search" className="cart" />
                <div className="dot"></div>
            </div>

            <button>Sign In </button>
        </div>
    </div>
  )
}

export default Navbar;
