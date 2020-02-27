import React from "react"
import { useTranslation } from 'react-i18next'
import { useAuthorsMetadata } from "../hooks/useAuthors.hook"
import Layout from "../components/base/Layout"
import AuthorsListWrapper from "../components/AuthorsListWrapper/AuthorsListWrapper"
import { AUTHOR_LANGUAGE_QUERY } from "../helpers/Constants"

export default () => {
  const { i18n, t } = useTranslation();
  const queryAuthor = AUTHOR_LANGUAGE_QUERY[i18n.language];
  const authors = useAuthorsMetadata()[queryAuthor].nodes.map(author => author.json);

  return (
    <Layout>
      <div className="authors-page">
        <h1 className="page-title">{t('menu.authors')}</h1>
        <AuthorsListWrapper authors={authors} />
      </div>
    </Layout>
  )
}
