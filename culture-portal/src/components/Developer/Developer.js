import React from 'react';
import { useTranslation } from 'react-i18next';
import List from '../List/List';

const Developer = ({
  content: {
    name,
    nickName,
    id,
    description: { description },
    avatar: {
      file: { url },
    },
    githubUrl: { githubUrl },
    contribution: { contribution },
  },
}) => {
  const { t } = useTranslation();

  return (
    <div className="developer-card box-with-bg">
      <h2 className="developer-card__name">{name}</h2>
      <img src={url} alt={nickName} className="developer-card__photo" />
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="developer-card__name"
      >
        {nickName}
      </a>
      <p className="developer-card__description">{description}</p>
      <div className="developer-card__description">
        {t('contribution')}
        <List data={contribution} id={id} />
      </div>
    </div>
  );
};

export default Developer;
