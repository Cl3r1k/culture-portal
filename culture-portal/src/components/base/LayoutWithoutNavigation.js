import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import '../../scss/styles.scss';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export default ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" className="wrapper">
        {children}
      </Container>
      <div className="footer">
        <p className="footer-content"> (c) RSS-React-group-9 2020</p>
      </div>
    </MuiThemeProvider>
  );
};
