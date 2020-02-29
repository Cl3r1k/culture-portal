import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import '../../scss/styles.scss';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const LayoutWithoutNavigation = ({ children }) => {
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
      <div className="footer">(c) RSS-React-group-9 2020</div>
    </MuiThemeProvider>
  );
};

LayoutWithoutNavigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

LayoutWithoutNavigation.defaultProps = {
  children: undefined,
};

export default LayoutWithoutNavigation;
