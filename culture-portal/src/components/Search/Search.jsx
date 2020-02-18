import React from "react"

export default props => {
  const { startSearch } = props
  return (
    <input
      className="search-input"
      type="search"
      onChange={startSearch}
    />
  )
}
