import React from "react"
import { useTranslation } from 'react-i18next'

const Language = () => {
  const { i18n } = useTranslation()

  // TODO: Change class for active language
  const setLanguage = (evt) => {
    if (evt.target.tagName === 'SPAN') {
      i18n.changeLanguage(evt.target.textContent.toLowerCase())
    }
  }

  return (
    <div className="language" onClick={setLanguage}>
      <span>EN</span>
      <span className="active">RU</span>
      <span>BY</span>
    </div>
    )
}
export default Language
