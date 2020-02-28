import React, { useState, useEffect } from 'react';
import AuthorsList from '../AuthorsList/AuthorsList';
import Search from '../Search/Search';

const AuthorsListWrapper = (props) => {
  const { authors } = props;
  const [filteredArrOfAuthors, setSearch] = useState(authors);

  useEffect(() => {
    setSearch(authors);
  }, [authors]);

  const startSearch = ({ target: { value } }) => {
    let resultArr = authors;
    if (value) {
      const searchWord = value.toLowerCase();
      resultArr = authors.filter((card) => {
        const fullName = card.fullName.toLowerCase();
        const birthLocation = card.birth.location.name.toLowerCase();
        return (
          fullName.includes(searchWord) || birthLocation.includes(searchWord)
        );
      });
    }
    setSearch(resultArr);
  };

  return (
    <>
      <Search startSearch={startSearch} />
      <AuthorsList filteredArrOfAuthors={filteredArrOfAuthors} />
    </>
  );
};

export default AuthorsListWrapper;
