import React from "react"

const Search = (props) => {
  const { startSearch } = props;
  return (
    <input
      className="search-input"
      type="search"
      onChange={startSearch}
    />
  );
}

export default Search;