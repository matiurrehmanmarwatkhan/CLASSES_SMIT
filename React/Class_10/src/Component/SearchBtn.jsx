import React from "react";

const SearchBtn = ({ handleSearch }) => {
  return (
    <div className="p-5">
      <button className="p-2 rounded border" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBtn;
