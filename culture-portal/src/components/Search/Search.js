import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Search = (props) => {
  const { startSearch } = props;
  const { t } = useTranslation();

  return (
    <div className="search-wrap">
      <input
        className="search-input"
        type="search"
        placeholder={t('search-placeholder')}
        onChange={startSearch}
      />
    </div>
  );
};

Search.propTypes = {
  startSearch: PropTypes.func.isRequired,
};

export default Search;
