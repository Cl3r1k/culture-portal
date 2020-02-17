import React from "react"
import { Link } from "gatsby"
import AuthorCard from "../AuthorCard"

export default props => {
  const { filteredArrOfPoets } = props
  console.log(filteredArrOfPoets);
  
  return (
    <ul className="authors-list">
      {filteredArrOfPoets.map(card => {
        return (
          <li className="authors-list__li" key={card.id}>
            <Link to={`/${card.name}/`}>
              <AuthorCard card={card} />
            </Link>
          </li>
        )
      })}
    </ul >
  )
}
