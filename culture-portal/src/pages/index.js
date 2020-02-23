import React from "react"
import Layout from "../components/base/Layout"
import { Link } from "gatsby"

import AuthorCard from '../components/AuthorCard/AuthorCard'
import { PORTAL_DESCRIPTION } from '../helpers/Constants'
import getDayAuthor from "../helpers/Utils"
import data from "../data/authors"

export default () => {
  const language = "ru";
  const descriptionList = PORTAL_DESCRIPTION[language];

  const { authors } = data;
  const dayAuthor = getDayAuthor(authors);
  const { surname } = dayAuthor;

  return (
    <Layout>
      <div className="home-page">
        <div className="portal-description">
          {descriptionList
            .map(description => <p key={description.slice(0, 2)}>{description}</p>)}
        </div>
        <div className="day-author">
          <h2>Автор дня</h2>
          <Link to={`/${surname}`}>
            <AuthorCard author={dayAuthor} />
          </Link>
        </div>
      </div>
    </Layout>
  )
}
