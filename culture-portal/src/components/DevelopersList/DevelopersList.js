import React from 'react';
import { useTranslation } from 'react-i18next';
import useDevelopersMetadata from '../../hooks/useDevelopers.hook';
import Developer from '../Developer/Developer';
import { DEVELOPERS_LANGUAGE_QUERY } from '../../helpers/Constants';

const DevelopersList = () => {
  const { i18n, t } = useTranslation();
  const queryDevelopers = DEVELOPERS_LANGUAGE_QUERY[i18n.language];
  const developers = useDevelopersMetadata()[queryDevelopers].nodes;

  return (
    <>
      <h1 className="page-title">{t('menu.team')}</h1>
      <div className="developers-list">
        {developers.map((developer) => (
          <Developer key={developer.id} content={developer} />
        ))}
      </div>
    </>
  );
};

export default DevelopersList;
