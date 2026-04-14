import React from "react";

const SearchInput = ({ setSearchQuery }) => {
  let handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="flex flex-col gap-2 p-5">
      <label htmlFor="">Search : </label>
      <input
        type="search"
        onChange={handleChange}
        className="border rounded p-1"
      />
    </div>
  );
};

export default SearchInput;
