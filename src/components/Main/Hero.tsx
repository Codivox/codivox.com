/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import HeroSVG from '../../images/hero';
import { Link } from 'gatsby';

const Hero: React.FC = () => {
  const heroTitle =
    'We’re developers and designers specialized in building quality web and mobile apps';
  const heroSubtitle =
    'From idea to launch, we build stunning and performant apps while putting a lot of effort into optimizations and enhancing UI/UX';
  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(228 229 255) 25%, rgb(244, 245, 255) 100%)`,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '100%', '55% 45%'],
          gridAutoFlow: ['dense', 'dense', null],
          minHeight: '660px',
          alignItems: 'center',
          mb: ['80px', '80px', '0px'],
          maxWidth: '1110px',
          margin: '0 auto',
          padding: '0 1.0875rem',
        }}
      >
        <Flex
          sx={{
            display: 'grid',
            gridTemplateRows: 'auto auto auto',
            height: [300, 300, 400],
            gridTemplateColumns: ['100%'],
            gridColumn: [1, 1, null],
            textAlign: ['center', 'center', 'left'],
          }}
        >
          <Heading
            sx={{
              fontSize: ['24px', '24px', '38px'],
              mt: [3, 3, 0],
              color: `#000053`,
              // fontFamily: 'heading',
              display: 'block',
            }}
          >
            {heroTitle}
          </Heading>
          <p
            sx={{
              maxWidth: '370px',
              opacity: '0.85',
              mx: ['auto', 'auto', 0],
              fontSize: 18,
              color: `#000053`,
            }}
          >
            {heroSubtitle}
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=923091313666"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              variant: 'buttons.prime',
              width: ['100%', '100%', 210],
              mt: [3, 3, 0],
            }}
          >
            Let's Talk
          </a>
        </Flex>

        <HeroSVG
          sx={{
            gridRow: [1, 1, 'unset'],
            gridColumn: [1, 1, 'unset'],
            width: '100%',
            mt: [2, 2, 0],
          }}
        />
      </Box>
    </div>
  );
};

export default Hero;
