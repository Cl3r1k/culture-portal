import React from "react"
import Layout from "../components/base/Layout"
import { Link } from "gatsby"

import AuthorCard from '../components/AuthorCard/AuthorCard'
import { PORTAL_DESCRIPTION } from '../helpers/Constants'
import getRandomAuthor from "../helpers/Utils"
import data from "../data/authors"

export default () => {
  const language = "ru";
  const descriptionList = PORTAL_DESCRIPTION[language];

  const { authors } = data;
  const randomAuthor = getRandomAuthor(authors);
  const { surname } = randomAuthor;

  return (
    <Layout>
      <div className="home-page">
        <div className="portal-description">
          {descriptionList
            .map(description => <p>{description}</p>)}
        </div>
        <div className="day-author">
          <h2>Автор дня</h2>
          <Link to={`/${surname}`}>
            <AuthorCard author={randomAuthor} />
          </Link>
        </div>
      </div>
    </Layout>
  )
}
