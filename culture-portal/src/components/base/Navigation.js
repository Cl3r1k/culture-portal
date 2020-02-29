import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

const Navigation = ({ handleClick }) => {
  const { t } = useTranslation();
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/" activeClassName="active-page">
            {t('menu.home')}
          </Link>
        </li>
        <li>
          <Link to="/authors/" partiallyActive activeClassName="active-page">
            {t('menu.authors')}
          </Link>
        </li>
        <li>
          <Link to="/team/" activeClassName="active-page">
            {t('menu.team')}
          </Link>
        </li>
        <li>
          <Link to="/worklog/" activeClassName="active-page">
            {t('menu.worklog')}
          </Link>
        </li>
        <li>
          <Link to="/styleguide/" activeClassName="active-page">
            {t('menu.styleguide')}
          </Link>
        </li>
        <li>
          <Link to="/workflow/" activeClassName="active-page">
            {t('menu.workflow')}
          </Link>
        </li>
        <li>
          <Link to="/technology/" activeClassName="active-page">
            {t('menu.technology')}
          </Link>
        </li>
      </ul>
      <button
        className="close"
        onClick={() => handleClick(false)}
        rel="button"
        type="button"
      />
    </nav>
  );
};

Navigation.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Navigation;
