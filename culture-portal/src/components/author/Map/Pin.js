import React from 'react';
import PropTypes from 'prop-types';
import PinPopup from './PinPopup';
import PinMarker from './PinMarker';

class Pin extends React.Component {
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
    location: PropTypes.shape({
      zoom: PropTypes.number,
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }).isRequired,
};

export default Pin;
