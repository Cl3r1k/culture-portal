import React from 'react';
import '../i18n/i18n';
import { useTranslation } from 'react-i18next';
import useAuthorsMetadata from '../hooks/useAuthors.hook';
import Layout from '../components/base/Layout';
import Header from '../components/base/Header';
import AuthorsListWrapper from '../components/AuthorsListWrapper/AuthorsListWrapper';
import { AUTHOR_LANGUAGE_QUERY } from '../helpers/Constants';

export default () => {
  const { i18n, t } = useTranslation();
  const queryAuthor = AUTHOR_LANGUAGE_QUERY[i18n.language];
  const authors = useAuthorsMetadata()[queryAuthor].nodes.map(
    (author) => author.json,
  );

  return (
    <main className="app">
      <Header />
      <Layout>
        <div className="authors-page">
          <h1 className="page-title">{t('menu.authors')}</h1>
          <AuthorsListWrapper authors={authors} />
        </div>
      </Layout>
    </main>
  );
};
