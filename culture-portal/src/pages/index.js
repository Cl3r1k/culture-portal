import React from "react"
import Layout from "../components/base/Layout"
import LayoutWithoutNavigation from "../components/base/LayoutWithoutNavigation"
import Typography from '@material-ui/core/Typography';

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
    <>
      <div className="home-page-wrapper">
        <Layout>
          <div className="portal-description">
            {descriptionList
              .map(description => <p key={description.slice(0, 2)}>{description}</p>)}
          </div>
        </Layout>
      </div>
      <LayoutWithoutNavigation>
        <div className="home-page">
          <div className="day-author">
            <Typography variant="h2" component="h2" gutterBottom className="title">Автор дня</Typography>
            <div className="author-info">
              <Link to={`/${surname}`}>
              <AuthorCard author={dayAuthor} />
              </Link>
            </div>
          </div>
        </div>
      </LayoutWithoutNavigation>
    </>
  )
}
