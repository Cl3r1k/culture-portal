import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation();

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/" activeClassName="active-page">{t('menu.home')}</Link>
        </li>
        <li>
          <Link to="/authors/" partiallyActive={true} activeClassName="active-page">{t('menu.authors')}</Link>
        </li>
        <li>
          <Link to="/team/" activeClassName="active-page">{t('menu.team')}</Link>
        </li>
        <li>
          <Link to="/worklog/" activeClassName="active-page">{t('menu.worklog')}</Link>
        </li>
        <li>
          <Link to="/styleguide/" activeClassName="active-page">{t('menu.styleguide')}</Link>
        </li>
        <li>
          <Link to="/workflow/" activeClassName="active-page">Workflow</Link>
        </li>
      </ul>
      <button className="close"></button>
    </nav>
  )
}
