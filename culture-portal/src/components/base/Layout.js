import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Footer from './Footer';
import '../../scss/styles.scss';

const Layout = ({ children }) => {
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
      <Footer />
    </MuiThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Layout.defaultProps = {
  children: undefined,
};

export default Layout;
