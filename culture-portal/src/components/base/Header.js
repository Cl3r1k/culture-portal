import React from 'react';
import '../../i18n/i18n';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Navigation from './Navigation';
import Language from '../common/Language';
import '../../scss/styles.scss';
import { MOBILE_SCREEN } from '../../helpers/Constants';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavigationOpened: false,
      isDesktopView: true,
    };
  }

  componentDidMount() {
    if (window.innerWidth >= MOBILE_SCREEN) {
      this.setState({
        isDesktopView: true,
      });
    } else {
      this.setState({
        isDesktopView: false,
      });
    }
  }

  handleClick = (isShow) => {
    if (isShow) {
      this.setState({
        isNavigationOpened: true,
      });
    } else {
      this.setState({
        isNavigationOpened: false,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { isNavigationOpened, isDesktopView } = this.state;
    return (
      <header className="header-wrapper">
        <Container className="top-header" maxWidth="lg">
          <button
            type="button"
            className="menu"
            onClick={() => this.handleClick(true)}
          />
          <a href="/" className="logo" />
          {(isDesktopView || isNavigationOpened) && (
            <Navigation handleClick={this.handleClick} />
          )}
          <Language />
        </Container>
        {children}
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Header.defaultProps = {
  children: undefined,
};

export default Header;
