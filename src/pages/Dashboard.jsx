// src/pages/Dashboard.jsx
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <ul className="box-info">
        <li>
          <i className="bx bxs-basket" />
          <span className="text">
            <h3>128</h3>
            <p>Today's Orders</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-group" />
          <span className="text">
            <h3>846</h3>
            <p>Active Members</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle" />
          <span className="text">
            <h3>₹42,350</h3>
            <p>Today's Revenue</p>
          </span>
        </li>
      </ul>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Orders</h3>
            <i className="bx bx-search" />
            <i className="bx bx-filter" />
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date</th>
                <th>Items</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  user: "Aman",
                  date: "30-08-2025",
                  items: "Veg Thali, Tea",
                  status: "Completed",
                  statusClass: "completed",
                },
                {
                  user: "Priya",
                  date: "30-08-2025",
                  items: "Sandwich",
                  status: "Pending",
                  statusClass: "pending",
                },
                {
                  user: "Rahul",
                  date: "29-08-2025",
                  items: "Idli, Coffee",
                  status: "Process",
                  statusClass: "process",
                },
              ].map((r, idx) => (
                <tr key={idx}>
                  <td>
                    <img
                      alt="u"
                      src={`https://i.pravatar.cc/100?img=${idx + 1}`}
                    />
                    <p>{r.user}</p>
                  </td>
                  <td>{r.date}</td>
                  <td>{r.items}</td>
                  <td>
                    <span className={`status ${r.statusClass}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="todo">
          <div className="head">
            <h3>Quick Tasks</h3>
            <i className="bx bx-plus" />
            <i className="bx bx-filter" />
          </div>
          <ul className="todo-list">
            <li className="completed">
              <p>Update weekly menu</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="not-completed">
              <p>Review feedback</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="completed">
              <p>Check inventory</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;