import React from 'react';
import { useTranslation } from 'react-i18next';
import useAuthorsMetadata from '../hooks/useAuthors.hook';
import Layout from '../components/base/Layout';
import Header from '../components/base/Header';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import AuthorsListWrapper from '../components/AuthorsListWrapper/AuthorsListWrapper';
import { AUTHOR_LANGUAGE_QUERY } from '../helpers/Constants';

export default () => {
  const { i18n, t } = useTranslation();
  const queryAuthor = AUTHOR_LANGUAGE_QUERY[i18n.language];
  const authors = useAuthorsMetadata()[queryAuthor].nodes.map(
    (author) => author.json,
  );

  const bounceAnimation = keyframes`${fadeIn
    }`;
  const BouncyDiv = styled.div`
  animation: 1.5s ${bounceAnimation};
`;

  return (
    <main className="app">
      <Header />
      <Layout>
        <div className="authors-page">
          <h1 className="page-title">{t('menu.authors')}</h1>
          <BouncyDiv>
          <AuthorsListWrapper authors={authors} />
          </BouncyDiv>
        </div>
      </Layout>
    </main>
  );
};
