import React from "react"
import { Link } from "gatsby"
import AuthorCard from "../AuthorCard"

export default props => {
  const { filteredArrOfAuthors } = props
  return (
    <ul className="authors-list">
      {filteredArrOfAuthors.map(card => {
        return (
          <li className="authors-list__li" key={card.id}>
            <Link to={`/${card.surname}/`}>
              <AuthorCard card={card} />
            </Link>
          </li>
        )
      })}
    </ul >
  )
}
