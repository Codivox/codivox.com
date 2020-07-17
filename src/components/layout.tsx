/** @jsx jsx */
import { ThemeProvider, jsx } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import theme from '../gatsby-plugin-theme-ui';
import Header from './header';
import './layout.css';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          ©{new Date().getFullYear()},{data.site.siteMetadata.title}
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
