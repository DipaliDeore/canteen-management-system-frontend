// src/pages/Purchases.jsx
import React from "react";

const PurchasesPage = () => {
  const rows = [
    {
      id: "PO-1021",
      user: "Aman",
      items: 3,
      amount: 240,
      status: "Paid",
    },
    {
      id: "PO-1022",
      user: "Priya",
      items: 1,
      amount: 90,
      status: "Pending",
    },
  ];
  
  return (
    <div className="table-data">
      <div className="order">
        <div className="head">
          <h3>
            <i className="bx bx-cart" /> Purchases
          </h3>
          <i className="bx bx-search" />
          <i className="bx bx-filter" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.id}</td>
                <td>{r.user}</td>
                <td>{r.items}</td>
                <td>₹{r.amount}</td>
                <td>
                  <span
                    className={`status ${
                      r.status === "Paid" ? "completed" : "pending"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasesPage;