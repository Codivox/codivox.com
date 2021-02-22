/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import WebDesignImg from '../../images/webDesignImg';

const WebDesign: React.FC = () => {
  const brandTitle =
    'We put smart efforts to research and planning to execute amazing experience';
  const brandSubtitle =
    'We deliver quality web apps design based on measurable results to get higher conversions.';
  return (
    <Box
      sx={{
        m: '0 auto',
        maxWidth: 1110,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <Box sx={{ textAlign: 'center', pt: '77px' }}>
        <Heading
          sx={{
            fontSize: ['26px', '32px'],
            width: ['100%', '460px'],
            m: '0 auto',
            fontWeight: 600,
          }}
        >
          Web design that helps you boost more revenue 💰
        </Heading>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '45% 45%'],
          gridTemplateRows: '1fr',
          gap: '5%',
          alignItems: 'center',
          mt: '25px',
        }}
      >
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <WebDesignImg
            sx={{
              gridRow: [1, 'unset'],
              gridColumn: [1, 'unset'],
              maxWidth: '250px',
            }}
          />
        </Flex>
        <Flex
          sx={{
            display: 'grid',
            gridTemplateRows: 'auto auto auto',
            gridTemplateColumns: ['100%'],
            textAlign: ['center', 'left'],
            flexDirection: 'column',
          }}
        >
          <Heading
            sx={{
              fontSize: ['24px', '26px'],
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {brandTitle}
          </Heading>
          <p sx={{ opacity: '0.85' }}>{brandSubtitle}</p>
        </Flex>
      </Box>
    </Box>
  );
};

export default WebDesign;
