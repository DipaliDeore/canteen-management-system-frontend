// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
<footer
      style={{
        backgroundColor: "#0f766e",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
      }}
      className="text-black py-2 text-white text-center shadow-inner"
    >
      <div className="container mx-auto px-6">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="font-semibold">ByteEats</span>.  
          All Rights Reserved.
          Made with ❤️ for campus foodies
        </p>
      </div>
    </footer>
  );
}

export default Footer;
