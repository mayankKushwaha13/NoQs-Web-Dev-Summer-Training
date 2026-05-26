import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-wrapper">
        <h2 className="logo">MayankTech</h2>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;