// src/pages/Users.jsx
import React from "react";
import { Button } from "../components/UI";

const UsersPage = () => {
  const users = [
    { name: "Aman", email: "aman@ex.com", mob: "9876543210" },
    { name: "Priya", email: "priya@ex.com", mob: "9876543211" },
    { name: "Rahul", email: "rahul@ex.com", mob: "9876543212" },
  ];
  
  return (
    <div className="table-data">
      <div className="order">
        <div className="head">
          <h3>
            <i className="bx bx-user" /> Users
          </h3>
          <i className="bx bx-search" />
          <i className="bx bx-filter" />
        </div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>
                  <i className="bx bxs-user" />
                  <p>{u.name}</p>
                </td>
                <td>{u.email}</td>
                <td>{u.mob}</td>
                <td>
                  <Button variant="tiny">View</Button>
                  <Button variant="tiny" className="ghost">Disable</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;