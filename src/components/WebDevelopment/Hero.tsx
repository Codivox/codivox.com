/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import WebDevelopmentHero from '../../images/webDevelopmentHero';
import { Link } from 'gatsby';

const Hero: React.FC = () => {
  const heroTitle =
    'We craft each website to achieve clear objectives and goals.';
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
          gridTemplateColumns: ['100%', '55% 45%'],
          gap: '0%',
          gridAutoFlow: ['dense', null],
          minHeight: '635px',
          alignItems: 'center',
          margin: '0px auto',
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Flex
          sx={{
            display: 'grid',
            gridTemplateRows: 'auto auto auto',
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
        <WebDevelopmentHero
          sx={{
            gridRow: [1, 'unset'],
            gridColumn: [1, 'unset'],
            width: '100%',
            mt: '-64px',
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
