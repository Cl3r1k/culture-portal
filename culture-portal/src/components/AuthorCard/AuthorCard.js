import React from "react"
import Typography from '@material-ui/core/Typography';

const AuthorCard = ({ author }) => {
  const { fullName, photo, description, birth, death } = author
  return (
    <div className="author-card">
      <div>
        <img src={photo.link} alt={`${fullName}. PhotoFile`} />
      </div>
      <div className="author-card-info">
        <Typography variant="h4" component="h1" gutterBottom>
          {fullName}
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          {birth.date} - {death.date}
        </Typography>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default AuthorCard
