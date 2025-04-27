import React from "react";

//function to implement search bar (had to be rewritten to export default)

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm("")}

        //add some special and cool looking style to the search bar
        style={{
          width: "200px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}

        //exemplary code asking for a fancy style gave following style pfff:
        //  style={{
        //  padding: "10px",
        //  borderRadius: "5px",
        //  border: "1px solid #ccc",
        //  width: "100%",
        //  boxSizing: "border-box",
        //}}
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