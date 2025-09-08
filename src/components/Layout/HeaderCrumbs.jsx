// src/components/Layout/HeaderCrumbs.jsx
import React from "react";

const HeaderCrumbs = ({ title }) => {
  return (
    <div className="head-title">
      <div className="left">
        <h1>{title}</h1>
        <ul className="breadcrumb">
          <li>
            <a href="#!">Dashboard</a>
          </li>
          <li>
            <i className="bx bx-chevron-right" />
          </li>
          <li>
            <a className="active" href="#!">
              {title}
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default HeaderCrumbs;