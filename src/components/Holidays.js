import React from "react";

// Helper function to format the date
function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('de', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

//function to display and list holidays
export default function Holidays({ holidays }) {
  return (
    <div>
      {/* <h2>Public Holidays</h2> */}
      <table class="center">
        <thead>
          <tr>
            <th>Date</th>
            <th>Local Name</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday) => (
            <tr key={holiday.date}>
              <td>{formatDate(holiday.date)}</td>
              <td>{holiday.localName}</td>
              <td>{holiday.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}