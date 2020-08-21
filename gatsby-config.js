require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `codivox`,
    description: `We’re developers and designers specialized in building quality web and mobile apps`,
    author: `@codivox`,
    siteUrl: `https://codivox.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `codivox`,
        short_name: `codivox`,
        start_url: `/`,
        background_color: `#6670FD`,
        theme_color: `#6670FD`,
        display: `minimal-ui`,
        icon: `src/images/codivox.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: '@theme-ui/preset-tailwind',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Josefin Sans:bold', 'Lato:400,700']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176005700-1",
        head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.tsx`),
      },
    },
  ],
};
