import React, { Component } from 'react';

import AuthorsList from "../AuthorsList"
import Search from "../Search"

import authorsData from "../../data/authors"

class AuthorsListWrapper extends Component {
  state = {
    filteredArrOfAuthors: authorsData.authors,
  }

  startSearch = (e) => {
    const searchWord = e.target.value.toLowerCase();
    let resultArr = authorsData.authors;
    if (e.target.value) {
      resultArr = authorsData.authors.filter(card => {
        const fullName = card.fullName.toLowerCase();
        const birthLocation = card.birth.location.name.toLowerCase();
        return (fullName.includes(searchWord) || birthLocation.includes(searchWord));
      });
    }
    this.setState({ filteredArrOfAuthors: resultArr });
  }

  render() {
    const { filteredArrOfAuthors } = this.state;
    return (
      <>
        <Search
          startSearch={this.startSearch}
        />
        <AuthorsList
          filteredArrOfAuthors={filteredArrOfAuthors}
        />
      </>
    );
  }

}

export default AuthorsListWrapper;