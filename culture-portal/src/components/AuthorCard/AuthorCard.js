import React from "react"

const AuthorCard = ({ author }) => {
  const { fullName, photo, description, birth, death } = author
  return (
    <>
      <h1>{fullName}</h1>
      <p>
        {birth.date} - {death.date}
      </p>
      <div>
        <img src={photo.link} alt={`${fullName}. Фотография`} />
      </div>
      <p>{description}</p>
    </>
  )
}

export default AuthorCard
