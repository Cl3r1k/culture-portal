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
    <Container maxWidth="lg" className="wrapper">
      <Box className="top-header">
        <a href="/" className="logo"></a>
        <Language/>
      </Box>
      <Navigation/>
      {children}
    </Container>
    </MuiThemeProvider>
  </>
  )
}
