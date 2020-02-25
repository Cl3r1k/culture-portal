import React from "react"
import  CssBaseline  from '@material-ui/core/CssBaseline';
import  Container  from '@material-ui/core/Container';
import  Box  from '@material-ui/core/Box';
import Navigation from "./Navigation"
import Language from "../common/Language"
import "../../scss/styles.scss"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export default ({children}) => {

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
  <>
    <MuiThemeProvider theme={theme}>
    <CssBaseline/>
    <div className="header-wrapper">
      <Container className="top-header" maxWidth="lg">
        <a href="/" className="logo"></a>
        <Navigation/>
        <Language/>
      </Container>
    </div>
      <Container maxWidth="lg" className="wrapper">
        {children}
      </Container>
    </MuiThemeProvider>
  </>
  )
}
