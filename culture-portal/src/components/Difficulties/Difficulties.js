import React from 'react';
import { useTranslation } from 'react-i18next'

const Difficulties = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="base-title_md">{t('difficulties')}</h3>
      <ol className="box-with-bg">
        <li>It was a good idea to use "git flow" initially</li>
        <li>Difficulty #2</li>
        <li>Difficulty #3</li>
      </ol>
    </div>
  )
}

export default Difficulties
