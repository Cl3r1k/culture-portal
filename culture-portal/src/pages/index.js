import React from "react"
import Layout from "../components/base/Layout"
import LayoutWithoutNavigation from "../components/base/LayoutWithoutNavigation"
import Typography from '@material-ui/core/Typography'

import { Link } from "gatsby"
import '../i18n/i18n'
import { useTranslation } from 'react-i18next'
import { useAuthorsMetadata } from '../hooks/useAuthors.hook'

import AuthorCard from '../components/AuthorCard/AuthorCard'
import getDayAuthor from "../helpers/Utils"
import { DESCRIPTION_LIST_INDICES, AUTHOR_LANGUAGE_QUERY } from "../helpers/Constants"

export default () => {
  const { t, i18n } = useTranslation()
  const queryAuthor = AUTHOR_LANGUAGE_QUERY[i18n.language]
  const authors = useAuthorsMetadata()[queryAuthor].nodes.map(author => author.json)
  
  const dayAuthor = getDayAuthor(authors)
  const { surname } = dayAuthor

  return (
    <>
      <div className="home-page-wrapper">
        <Layout>
          <div className="portal-description">
            {DESCRIPTION_LIST_INDICES.map(index => <p key={index}>{t(`portal-Description.${index}`)}</p>)}
          </div>
        </Layout>
      </div>
      <LayoutWithoutNavigation>
        <div className="home-page">
          <div className="day-author">
            <Typography variant="h2" component="h2" gutterBottom className="title">{t('day-author')}</Typography>
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
