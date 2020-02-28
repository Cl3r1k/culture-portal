import React from 'react';
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

export default Search;
