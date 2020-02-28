import React from 'react';
import PinPopup from './PinPopup';
import PinMarker from './PinMarker';

class Pin extends React.Component {
  state = {
    isPopupOpened: false,
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

export default Pin;
