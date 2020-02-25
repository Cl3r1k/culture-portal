import React, { Component } from 'react';
import AuthorsList from "../AuthorsList/AuthorsList"
import Search from "../Search/Search"

class AuthorsListWrapper extends Component {
  state = {
    filteredArrOfAuthors: this.props.authors,
  }

  startSearch = ({ target: { value }}) => {
    const { authors } = this.props;
    const searchWord = value.toLowerCase();
    let resultArr = authors;
    if (value) {
      resultArr = authors.filter(card => {
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