/** @jsx jsx */
import { ThemeProvider, jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';

import theme from '../gatsby-plugin-theme-ui';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <ThemeProvider theme={theme}>
    <header
      sx={{
        background: theme.colors.gray[5],
        marginBottom: `1.45rem`,
      }}
    >
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 sx={{ margin: 0 }}>
          <Link
            to="/"
            sx={{
              color: theme.colors.white,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  </ThemeProvider>
);

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
