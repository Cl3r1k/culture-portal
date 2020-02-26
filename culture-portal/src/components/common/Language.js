import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { LANGUAGES, DEFAULT_LANGUAGE } from '../../helpers/Constants'

const Language = () => {
  const { i18n } = useTranslation()
  const [currentLanguage, setLanguageState] = useState(DEFAULT_LANGUAGE)

  const setLanguage = (evt) => {
    if (evt.target.tagName === 'SPAN') {
      i18n.changeLanguage(evt.target.textContent.toLowerCase())
      setLanguageState(evt.target.textContent)
    }
  }

  return (
    <div className="language" onClick={setLanguage}>
      {LANGUAGES.map(language => (
        <span className={(language === currentLanguage) ? 'active' : undefined} key={language}>{language}</span>
      ))}
    </div>
  )
}
export default Language
