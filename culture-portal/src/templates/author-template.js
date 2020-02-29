import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Header from '../components/base/Header';
import Layout from '../components/base/Layout';
import AuthorCard from '../components/AuthorCard/AuthorCard';
import Table from '../components/Table/Table';
import TableRow from '../components/TableRow/TableRow';
import VideoWindow from '../components/VideoWindow/VideoWindow';
import Map from '../components/author/Map/Map';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';

export default ({ pageContext }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const author = pageContext[currentLanguage];
  const {
    id, fullName, biography, works, video, gallery,
  } = author;
  const TABLE_CAPTION = t('AUTHOR_WORKS.TABLE_CAPTION');
  const COLUMN_CAPTIONS = {
    FIRST_COLUMN: t('AUTHOR_WORKS.COLUMN_CAPTIONS.FIRST_COLUMN'),
    SECOND_COLUMN: t('AUTHOR_WORKS.COLUMN_CAPTIONS.SECOND_COLUMN'),
  };

  return (
    <main>
      <Header />
      <Layout>
        <div className="author-page">
          <h1 className="page-title">{fullName}</h1>
          <AuthorCard author={author} />
          <h3>{t('biography-header')}</h3>
          <Timeline lineColor="#dddddd">
            {biography.map(({ date, description }, index) => (
              <TimelineItem
                key={`${id}${index}`}
                dateText={date}
                style={{ color: '#e86971' }}
              >
                <p style={{ color: '#ffffff' }}>{description}</p>
              </TimelineItem>
            ))}
          </Timeline>

          <Table caption={TABLE_CAPTION}>
            <thead>
              <TableRow data={COLUMN_CAPTIONS} isHeadRow />
            </thead>
            <tbody>
              {works.map((work, index) => (
                <TableRow
                  data={work}
                  isHeadRow={false}
                  key={`${id}${index}`}
                />
              ))}
            </tbody>
          </Table>

          <VideoWindow video={video} about={fullName} />
          <Map data={author} />
          <PhotoGallery data={gallery} />
        </div>
      </Layout>
    </main>
  );
};
