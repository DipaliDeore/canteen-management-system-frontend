// src/pages/Coupons.jsx
import React from "react";

const CouponsPage = () => {
  const coupons = [
    { code: "WELCOME10", type: "Percent", value: "10%", users: 120 },
    { code: "MEAL50", type: "Flat", value: "₹50", users: 87 },
  ];
  
  return (
    <div className="table-data">
      <div className="order">
        <div className="head">
          <h3>
            <i className="bx bx-purchase-tag-alt" /> Coupons
          </h3>
          <i className="bx bx-search" />
          <i className="bx bx-filter" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Coupon</th>
              <th>Type</th>
              <th>Value</th>
              <th>Used By</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c, i) => (
              <tr key={i}>
                <td>
                  <i className="bx bx-purchase-tag-alt" />
                  <p>{c.code}</p>
                </td>
                <td>{c.type}</td>
                <td>{c.value}</td>
                <td>{c.users}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouponsPage;