// src/components/Layout/Sidebar.jsx
import React from "react";

const Sidebar = ({ collapsed, menu, active, setActive }) => {
  return (
    <aside id="sidebar" className={collapsed ? "hide" : ""}>
      <a href="#!" className="brand">
        <i className="bx bxs-bowl-hot" />
        <span className="text">Canteen Admin</span>
      </a>

      <ul className="side-menu top">
        {menu.map((m) => (
          <li
            key={m.key}
            className={active === m.key ? "active" : ""}
          >
            <a href="#!" onClick={() => setActive(m.key)}>
              <i className={`bx ${m.icon}`} />
              <span className="text">{m.key}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="side-menu">
        <li>
          <a href="#!" className="logout">
            <i className="bx bxs-log-out-circle" />
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;