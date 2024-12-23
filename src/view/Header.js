import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../image/logo.png";

function Header() {
  const [activeTab, setActiveTab] = useState("/");
  const { cartItems } = useSelector((state) => ({
    cartItems: state.cart.items,
  }));

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center top-0 sticky p-3 flex justify-between shadow-2xl bg-[#ffffff] mb-2">
      <div className="flex items-center">
  <Link to="/" className="flex items-center">
    <div style={{ display: "flex", padding: 0, margin: 0 }}>
      <img
        src={logo}
        alt="tastzy logo"
        style={{ width: "40px", height: "40px", objectFit:"cover",  margin: 0, borderRadius:"5%",marginRight:"0.5vw", }}
      />
    </div>
    <h1 className="text-xl font-extrabold">Tastzy</h1>
  </Link>
</div>

      <div>
        <ul className="flex justify-between align-middle">
          <Link
            className={`text-xl px-4 ${activeTab === "/" ? "active" : ""}`}
            to="/"
            onClick={() => handleTabClick("/")}
          >
            Home
          </Link>
          <Link
            className={`text-xl px-4 ${
              activeTab === "/search" ? "active" : ""
            }`}
            to="/search"
            onClick={() => handleTabClick("/search")}
          >
            Search
          </Link>
          <Link
            className={`text-xl px-4 ${activeTab === "/help" ? "active" : ""}`}
            to="/"
            onClick={() => handleTabClick("/")}
          >
            Help
          </Link>
          <Link
            className={`text-xl font-bold px-4 ${
              activeTab === "/cart" ? "active" : ""
            }`}
            to="/cart"
            onClick={() => handleTabClick("/cart")}
          >
            Cart 🛒 ({cartItems.length} items)
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;

// import React from 'react'
// import {Link} from "react-router-dom"
// function Header() {
//     const [activeTab, setActiveTab] = useState('home');

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//       };

//     return (
//         <div className="header">
//             <div className="logo-image">
//                 <h1>FOA</h1>
//             </div>

//             <div className="nav-items">
//                 <ul>
//                     <Link className="li" to={"/"}>Home</Link>
//                     <Link className="li" to={"/about"}>About Us</Link>
//                     <Link className="li" to={"/contact"}>Contact Us</Link>
//                     <Link className="li" to={"/"}>Cart</Link>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Header
