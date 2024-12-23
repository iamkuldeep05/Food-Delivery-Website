import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
      {/* Logo and Brand Name */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div style={{ display: "flex", padding: 0, margin: 0 }}>
            <img
              src="/logo.png" // Correct reference to public folder
              alt="tastzy logo"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                margin: 0,
                borderRadius: "5%",
                marginRight: "0.5vw",
              }}
            />
          </div>
          <h1 className="text-xl font-extrabold">Tastzy</h1>
        </Link>
      </div>

      {/* Navigation Links */}
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
            to="/help"
            onClick={() => handleTabClick("/help")}
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
