import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation();

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/" className="active-page">{t('menu.home')}</Link>
        </li>
        <li>
          <Link to="/authors/">{t('menu.authors')}</Link>
        </li>
        <li>
          <Link to="/team/">{t('menu.team')}</Link>
        </li>
        <li>
          <Link to="/worklog/">{t('menu.worklog')}</Link>
        </li>
        <li>
          <Link to="/styleguide/">{t('menu.styleguide')}</Link>
        </li>
      </ul>
    </nav>
  )
}
