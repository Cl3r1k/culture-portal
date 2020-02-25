import React from "react"
import { useTranslation } from 'react-i18next'

const Developer = ({
  content: {
    name,
    nickName,
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
    <div className="developer-card">
      <h2>{name}</h2>
      <img src={url} alt={nickName}></img>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        {nickName}
      </a>
      <p>{description}</p>
      <div>
        {t('contribution')}
        {contribution}
      </div>
    </div>
  )
}

export default Developer
