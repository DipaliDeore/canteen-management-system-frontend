// src/pages/WeeklyTimetable.jsx
import React from "react";

const TimetablePage = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const slots = ["Breakfast", "Lunch", "Dinner"];
  const cell = (d, s) => {
    if (s === "Breakfast") return "Poha / Upma";
    if (s === "Lunch") return "Veg Thali";
    return d === "Sun" ? "Biryani" : "Dal Khichdi";
  };
  
  return (
    <div className="timetable">
      <table className="tt">
        <thead>
          <tr>
            <th>Meal / Day</th>
            {days.map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.map((s) => (
            <tr key={s}>
              <td className="slot">{s}</td>
              {days.map((d) => (
                <td key={d + s}>{cell(d, s)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetablePage;