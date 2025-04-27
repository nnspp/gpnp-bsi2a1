import React from "react";

//function to display and list holidays
export default function Holidays({ holidays }) {
  return (
    <div>
      <h2>Public Holidays</h2>
      <ul>
        {holidays.map((holiday) => (
          <li key={holiday.date}>
            {holiday.date}: {holiday.localName} ({holiday.name})
          </li>
        ))}
      </ul>
    </div>
  );
}