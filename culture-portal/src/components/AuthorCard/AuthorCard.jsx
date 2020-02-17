import React from "react"

export default props => {
  const { card } = props
  return (
    <div className="author-card">
      <img
        className="author-card__photo"
        src={card.photo.link}
        alt="portrait" />
      <p className="author-card__name">
        {card.fullName}
      </p>
      <p className="author-card__years">
        {`${card.birth.date} - ${card.death.date}`}
      </p>
      <p className="author-card__description">
        {card.description}
      </p>
    </div>
  )
}
