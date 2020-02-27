import React from "react"
import Container from "@material-ui/core/Container"
import Navigation from "./Navigation"
import Language from "../common/Language"
import "../../scss/styles.scss"

export default ({ children }) => {

  return (
    <header className="header-wrapper">
      <Container className="top-header" maxWidth="lg">
        <button className="menu"></button>
        <a href="/" className="logo"></a>
        <Navigation/>
        <Language/>
      </Container>
      {children}
    </header>
  )
}
