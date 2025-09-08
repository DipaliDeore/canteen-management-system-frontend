// src/components/Layout/Navbar.jsx
import React from "react";

const Navbar = ({ collapsed, setCollapsed, active }) => {
  return (
    <nav>
      <i
        className="bx bx-menu"
        onClick={() => setCollapsed((v) => !v)}
        title="Toggle sidebar"
      />
      <a href="#!" className="nav-link">
        {active}
      </a>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="button" className="search-btn">
            <i className="bx bx-search" />
          </button>
        </div>
      </form>
      <a href="#!" className="notification">
        <i className="bx bxs-bell" />
        <span className="num">3</span>
      </a>
      <a href="#!" className="profile">
        <img
          alt="avatar"
          src="https://i.pravatar.cc/100?img=12"
        />
      </a>
    </nav>
  );
};

export default Navbar;