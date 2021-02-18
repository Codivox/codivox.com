/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import AppDevelopmentHero from '../../images/appDevelopmentHero';

const Hero: React.FC = () => {
  const heroTitle = 'We craft each app to achieve clear objectives and goals.';

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: ['100%', '50% 45%'],
        gap: '5%',
        gridAutoFlow: ['dense', null],
        minHeight: '635px',
        alignItems: 'center',
        margin: ['0px auto 80px', '34px auto 0px'],
        maxWidth: 1110,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <Flex
        sx={{
          display: 'grid',
          gridTemplateRows: 'auto auto auto',
          height: ['calc( 300px )', 'calc( 400px )'],
          gridTemplateColumns: ['100%'],
          gridColumn: [1, null],
          textAlign: ['center', 'left'],
        }}
      >
        <Heading sx={{ fontSize: ['27px', '36px'], mt: ['0px', '38px'] }}>
          {heroTitle}
        </Heading>

        <button
          sx={{ variant: 'buttons.prime', width: ['100%', 210], mt: [3, 0] }}
        >
          Get a free estimate
        </button>
      </Flex>
      <AppDevelopmentHero
        sx={{
          gridRow: [1, 'unset'],
          gridColumn: [1, 'unset'],
          width: '100%',
        }}
      />
    </Box>
  );
};

export default Hero;
