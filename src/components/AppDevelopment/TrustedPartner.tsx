/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import TrustedPartnerImg from '../../images/trustedPartnerImg';
import Oval1xT from '../../images/oval1xT';
import Oval2x from '../../images/oval2x';

const TrustedPartner: React.FC = () => {
  const brandTitle = 'We’re trusted to provide all services in our agency';
  const brandSubtitle =
    'We’ll monitor, maintain and support your app for the life of the app.';
  return (
    <div sx={{ background: 'rgba(244, 245, 255, 0.5)' }}>
      <Box
        sx={{
          m: '0 auto',
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <hr
          sx={{
            border: '1px solid #A7ADFF',
            opacity: 0.2,
          }}
        />
        <Box sx={{ textAlign: 'center', pt: '77px' }}>
          <Heading
            sx={{
              fontSize: ['26px', '32px'],
              width: ['100%', 684],
              m: '0 auto',
              fontWeight: 600,
            }}
          >
            Your Trusted Partner 🤝
          </Heading>
          <Flex sx={{ position: 'absolute', display: ['none', 'block'] }}>
            <Box sx={{ position: 'relative', top: '-150px' }}>
              <span sx={{ position: 'relative', left: '747px', top: '59px' }}>
                <Oval1xT />
              </span>
              <span
                sx={{
                  position: 'relative',
                  left: '226px',
                  top: '36px',
                }}
              >
                <Oval2x />
              </span>
            </Box>
          </Flex>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['100%', '45% 45%'],
            gap: '5%',
            gridAutoFlow: ['dense', null],
            alignItems: 'center',
            mt: '25px',
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
            <Heading
              sx={{
                fontSize: ['24px', '26px'],
                maxWidth: '520px',
                // mt: ['10px', '100px'],
                width: ['100%', 445],
              }}
            >
              {brandTitle}
            </Heading>
            <p sx={{ opacity: '0.85' }}>{brandSubtitle}</p>
          </Flex>
          <Flex
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TrustedPartnerImg
              sx={{
                gridRow: [1, 'unset'],
                gridColumn: [1, 'unset'],
                width: '250px',
              }}
            />
          </Flex>
        </Box>
        <hr
          sx={{
            border: '1px solid #A7ADFF',
            position: 'relative',
            bottom: '-33px',
            opacity: 0.2,
          }}
        />
      </Box>
    </div>
  );
};

export default TrustedPartner;
