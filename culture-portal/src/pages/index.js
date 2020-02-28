import React from 'react';
import '../i18n/i18n';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import Layout from '../components/base/Layout';
import Header from '../components/base/Header';
import useAuthorsMetadata from '../hooks/useAuthors.hook';
import AuthorCard from '../components/AuthorCard/AuthorCard';
import getDayAuthor from '../helpers/Utils';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import {
  DESCRIPTION_LIST_INDICES,
  AUTHOR_LANGUAGE_QUERY,
} from '../helpers/Constants';

export default () => {
  const { t, i18n } = useTranslation();
  const queryAuthor = AUTHOR_LANGUAGE_QUERY[i18n.language];
  const authors = useAuthorsMetadata()[queryAuthor].nodes.map(
    (author) => author.json,
  );

  const dayAuthor = getDayAuthor(authors);
  const { surname } = dayAuthor;

  const bounceAnimation = keyframes`${fadeIn
    }`;
  const BouncyDiv = styled.div`
  animation: 1.5s ${bounceAnimation};
`;

  return (
    <main className="app">
      <Header className="home-page">
        <div className="portal-description">
          {DESCRIPTION_LIST_INDICES.map((index) => (
            <p key={index}>{t(`portal-Description.${index}`)}</p>
          ))}
        </div>
      </Header>
      <Layout>
        <div>
          <div className="day-author">
            <BouncyDiv>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              className="title"
            >
              {t('day-author')}
            </Typography>

              <div className="author-info">
                <Link to={`/authors/${surname}`}>
                  <AuthorCard author={dayAuthor} />
                </Link>
              </div>
            </BouncyDiv>
          </div>
        </div>
      </Layout>
    </main>
  );
};
