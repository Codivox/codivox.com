/** @jsx jsx */
import React from 'react';
import { Box, Heading, Flex, Button, jsx } from 'theme-ui';
import { Link } from 'gatsby';
import SEO from '../components/seo';

import ErrorIllustration from './../images/ErrorIlustration';
import Ellipse from './../images/Ellipse';
import EFiveEllipses from './../images/EFiveEllipses';
import EllipsesRotated from './../images/EllipsesRotated';

const NotFoundPage = () => (
  <Box
    sx={{
      background: `linear-gradient(
      0deg
    , rgb(255, 255, 255) 0%, rgb(228, 229, 255) 25%, rgb(244, 245, 255) 100%)`,
      py: ['60px'],
    }}
  >
    <SEO title="404: Not found" />
    <Flex
      sx={{
        margin: '0 auto',
        maxWidth: '1110px',
      }}
    >
      <span
        sx={{
          position: ['absolute'],
          display: ['none', 'block'],
        }}
      >
        <Ellipse />
      </span>

      <div
        sx={{
          mt: ['-80px', '-20px'],
          mx: 'auto',
        }}
      >
        <ErrorIllustration
          sx={{ maxWidth: ['300px', '400px', '500px', '600px'], ml: '-30px' }}
        />
      </div>

      <span
        sx={{
          position: 'absolute',
          right: '30px',
          display: ['none', 'none', 'block'],
        }}
      >
        <EFiveEllipses />
      </span>
    </Flex>

    <Flex>
      <span
        sx={{
          position: 'absolute',
          left: 0,
          display: ['none', 'block'],
        }}
      >
        <EllipsesRotated />
      </span>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          mt: [0, 0, '20px'],
        }}
      >
        <Heading
          as={'h1'}
          sx={{
            fontWeight: 'bold',
            fontSize: [28, 34, 44, 64],
          }}
        >
          Oops!
        </Heading>

        <Heading
          as={'h2'}
          sx={{
            fontSize: [18, 24, 24, 24],
            lineHeight: 3,
            fontWeight: 600,
          }}
        >
          We couldn't find that page.
        </Heading>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Button sx={{ variant: 'buttons.prime', width: ['100%', 212] }}>
            Back to Home
          </Button>
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default NotFoundPage;
