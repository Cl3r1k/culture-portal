import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PinPopup from './PinPopup';
import PinMarker from './PinMarker';

class Pin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupOpened: false,
    };
  }

  handleClick = (open) => {
    if (open) {
      this.setState({
        isPopupOpened: true,
      });
    } else {
      this.setState({
        isPopupOpened: false,
      });
    }
  }

  render() {
    const { content } = this.props;
    const { isPopupOpened } = this.state;
    return (
      <>
        <PinMarker content={content} handleClick={this.handleClick} />
        {isPopupOpened && (
          <PinPopup content={content} handleClick={this.handleClick} />
        )}
      </>
    );
  }
}

Pin.propTypes = {
  content: PropTypes.shape({
    date: PropTypes.string,
  }).isRequired,
};

export default Pin;
