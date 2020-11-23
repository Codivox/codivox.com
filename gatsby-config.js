require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Codivox`,
    description: `We are developers and designers specialized in building quality web and mobile apps. `,
    author: `@codivox`,
    siteUrl: `https://codivox.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: 'https://blog.codivox.com/graphql',
      },
    },
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
        name: `Codivox`,
        short_name: `Codivox`,
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Josefin Sans',
              variants: ['700'],
              fontDisplay: 'block',
						},
						{
              family: 'Lato',
              variants: ['400', '700'],
            },
          ],
        },
        //usePreload: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-176005700-1',
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
