// components/Filter.js
import React from 'react';

function Filter({ setSearchTitle, setSearchRate }) {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setSearchRate(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
