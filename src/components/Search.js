import React from "react";

//function to implement search bar (had to be rewritten to export default)

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={() => setSearchTerm("")}
        style={{
          marginLeft: "10px",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Clear
      </button> 
    </div>
  );
}