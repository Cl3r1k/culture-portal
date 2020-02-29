import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../helpers/Constants';

const Language = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setLanguageState] = useState(i18n.language);

  const setLanguage = (evt) => {
    if (evt.target.tagName === 'SPAN') {
      i18n.changeLanguage(evt.target.textContent);
      setLanguageState(evt.target.textContent);
    }
  };

  return (
    <div className="language" role="button" tabIndex="0" onClick={setLanguage}>
      {LANGUAGES.map((language) => (
        <span
          className={language === currentLanguage ? 'active' : undefined}
          key={language}
          role="button"
        >
          {language}
        </span>
      ))}
    </div>
  );
};

export default Language;
