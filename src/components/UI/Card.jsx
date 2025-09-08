// src/components/UI/Card.jsx
import React from "react";

const Card = ({ children, title, icon, badge, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      {(title || icon || badge) && (
        <div className="card-head">
          <h3>
            {icon && <i className={`bx ${icon}`} />}
            {title}
          </h3>
          {badge && (
            <span className={`badge ${badge.type}`}>
              {badge.text}
            </span>
          )}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;