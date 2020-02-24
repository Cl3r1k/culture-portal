import React from "react"

const Search = (props) => {
  const { startSearch } = props;
  return (
    <div className="search-wrap">
      <input
        className="search-input"
        type="search"
        onChange={startSearch}
      />
    </div>
  );
}

export default Search;
