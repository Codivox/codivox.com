/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import DesignHeroSVG from '../../images/designHeroSVG';
import { Link } from 'gatsby';

const Hero: React.FC = () => {
  const heroTitle =
    'User-centric design, research, testing and prototyping for web and mobile apps.';
  const heroSubtitle = '';
  return (
    <Box
      sx={{
        background: `linear-gradient(
        0deg
      , rgb(255, 255, 255) 0%, rgb(228, 229, 255) 25%, rgb(244, 245, 255) 100%)`,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '50% 45%'],
          gap: '5%',
          gridAutoFlow: ['dense', null],
          minHeight: '635px',
          alignItems: 'center',
          margin: ['0px auto 80px', '0 auto'],
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Flex
          sx={{
            display: 'grid',
            gridTemplateRows: 'auto auto auto',
            // height: ['calc( 300px )', 'calc( 400px )'],
            gridTemplateColumns: ['100%'],
            gridColumn: [1, null],
            textAlign: ['center', 'left'],
          }}
        >
          <Heading sx={{ fontSize: ['27px', '36px'] }}>{heroTitle}</Heading>
          <p sx={{ maxWidth: '370px', opacity: '0.85', mx: ['auto', 0] }}>
            {heroSubtitle}
          </p>
          <Link
            to={'/contact'}
            sx={{
              textDecoration: 'none',
            }}
          >
            <button
              sx={{
                variant: 'buttons.prime',
                width: ['100%', 210],
                mt: [3, 0],
              }}
            >
              Get a free estimate
            </button>
          </Link>
        </Flex>
        <DesignHeroSVG
          sx={{
            gridRow: [1, 'unset'],
            gridColumn: [1, 'unset'],
            width: '100%',
            mt: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
