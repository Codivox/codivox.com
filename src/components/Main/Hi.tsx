/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import SCircle from '../../images/sCircle';
import BCircle from '../../images/bCircle';
import ISixDots from '../../images/iSixDots';
import SixDots from '../../images/sixDots';
import { Link } from 'gatsby';

const Hi: React.FC = () => {
  const hiText =
    'Ready to get to work? We’re your experts, your muscle, and your partner in building an impactful and professional product.';
  return (
    <Box
      sx={{
        background: [null, '#6670FD'],
        height: 400,
        borderRadius: 30,
        maxWidth: '1110px',
        margin: [
          '1rem 1.0875rem',
          '2rem 1.0875rem',
          '3rem 1.0875rem',
          '5rem auto',
        ],
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Heading sx={{ color: ['#141633', 'background'], fontSize: '36px' }}>
          Say Hi!
        </Heading>
        <p
          sx={{
            maxWidth: '500px',
            opacity: '0.85',
            pb: '2rem',
            pt: '0.5rem',
            textAlign: 'center',
            color: ['#141633', '#fff'],
          }}
        >
          {hiText}
        </p>
        <Flex>
          <Link
            to={'/contact'}
            sx={{
              fontWeight: 600,
              variant: 'buttons.outlined',
              background: '#fff',
              color: '#6670FD',
              width: 140,
              height: 50,
              border: '1px solid #6670FD',
            }}
          >
            Contact Us
          </Link>
        </Flex>
      </Flex>
      <Flex
        sx={{
          position: 'absolute',
          display: ['none', 'none', 'none', 'block'],
        }}
      >
        <Box sx={{ position: 'relative', top: -400 }}>
          <span sx={{ position: 'relative', top: -150, left: -30 }}>
            <SCircle />
          </span>
          <span sx={{ position: 'relative', top: 150, left: -70 }}>
            <ISixDots />
          </span>
          <span
            sx={{
              position: 'relative',
              bottom: -250,
              left: [600, 600, 600, 600, 650],
            }}
          >
            <BCircle />
          </span>
          <span sx={{ position: 'relative', top: -50, left: 420 }}>
            <SixDots />
          </span>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hi;
