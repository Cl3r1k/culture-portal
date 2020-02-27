import React from "react"
import Container from "@material-ui/core/Container"
import Navigation from "./Navigation"
import Language from "../common/Language"
import "../../scss/styles.scss"
import { MOBILE_SCREEN } from "../../helpers/Constants"

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavigationOpened: false,
      isDesktopView: true
    }
  }

  handleClick = (isShow) => {
    if(isShow) {
      this.setState({
        isNavigationOpened: true
      })
    } else {
      this.setState({
        isNavigationOpened: false
      })
    }
  }

  componentDidMount() {
    if(window.innerWidth >= MOBILE_SCREEN) {
      this.setState({
        isDesktopView: true
      })
    } else {
      this.setState({
        isDesktopView: false
      })
    }
  }

  render(){
    const { children } = this.props;
    const { isNavigationOpened, isDesktopView } = this.state;
    return (
      <header className="header-wrapper">
        <Container className="top-header" maxWidth="lg">
          <button className="menu" onClick={() => this.handleClick(true)}></button>
          <a href="/" className="logo"></a>
          {(isDesktopView || isNavigationOpened) && <Navigation  handleClick={this.handleClick}/> }
          <Language/>
        </Container>
        {children}
      </header>
    )
  }
}

export default Header;
