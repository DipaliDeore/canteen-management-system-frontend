// src/pages/MessPlans.jsx
import React from "react";
import { Button, Card } from "../components/UI";

const MessPlansPage = () => {
  const plans = [
    {
      name: "Basic",
      price: 1999,
      mealsPerDay: 2,
      active: true,
    },
    {
      name: "Standard",
      price: 2699,
      mealsPerDay: 3,
      active: true,
    },
    {
      name: "Weekday",
      price: 1499,
      mealsPerDay: 2,
      active: false,
    },
  ];
  
  return (
    <div className="cards">
      {plans.map((p, i) => (
        <Card 
          key={i}
          title={p.name}
          icon="bx-calendar-week"
          badge={{ type: p.active ? "ok" : "warn", text: p.active ? "Active" : "Inactive" }}
        >
          <div className="card-body">
            <p className="price">₹{p.price}/month</p>
            <p className="muted">{p.mealsPerDay} meals/day</p>
          </div>
          <div className="card-actions">
            <Button variant="primary">Edit</Button>
            <Button variant="ghost">Details</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MessPlansPage;