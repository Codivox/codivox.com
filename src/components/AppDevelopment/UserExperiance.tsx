/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import UserExperianceImg from '../../images/userExperianceImg';

const UserExperiance: React.FC = () => {
  const brandTitle =
    'Developed by Facebook, used by big players like Uber, Instagram and Spotify.';
  const brandSubtitle =
    'We build high quality, fast and native experience, responsive apps with our agile development process.';
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
            width: ['100%', '512px'],
            m: '0 auto',
            fontWeight: 600,
          }}
        >
          Seamless user experiences for React Native apps 🎯
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
          <UserExperianceImg
            sx={{
              width: '250px',
            }}
          />
        </Flex>
        <Flex
          sx={{
            display: 'grid',
            gridTemplateRows: 'auto auto auto',
            gridTemplateColumns: ['100%'],
            textAlign: ['center', 'left'],
          }}
        >
          <Heading
            sx={{
              fontSize: ['24px', '26px'],
              maxWidth: '455px',
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

export default UserExperiance;
