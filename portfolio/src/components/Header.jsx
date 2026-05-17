import { useState } from "react";
import "./Header.css";
import Navbar from "./Navbar";

// auto-import ALL images from folder (Vite only)
const logos = import.meta.glob("../assets/Logos/*.{png,jpg,jpeg,svg}", {
  eager: true,
  as: "url",
});

const logoList = Object.values(logos);

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header-container">
        <div className="overflow-wrapper">
        <div className="scrolling-text">
          {[...logoList, ...logoList].map((logo, i) => (
            <img key={i} src={logo} alt="tech logo" />
          ))}
        </div>
      </div>
        <div className="header-values">
          <div className="weather">72 degree F</div>
          <div className="date">MAY 16, 2026</div>
        </div>

        <div className="header-title">
          <div className="name">
            THE CHRONICLES OF YASHVI MEHTA
          </div>
          <div className="tagline">
            ~Built one commit at a time~
          </div>
        </div>

        <div className="navbar">
          <Navbar />
        </div>
      </div>

      {/* scrolling logos */}
      
    </>
  );
}

export default Header;