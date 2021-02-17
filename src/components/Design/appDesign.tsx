/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import Oval1x from '../../images/oval1x';
import Oval2x from '../../images/oval2x';
import AppDesignImg from '../../images/appDesignImg';

const AppDesign: React.FC = () => {
  const brandTitle =
    'Apps design, that’s not just stunning but a truly engaging product';
  const brandSubtitle =
    'We design stunning and exclusive layouts for Android and iOS apps that enhances user experience.';
  return (
    <div sx={{ background: 'rgba(244, 245, 255, 0.5)', minHeight: '500px' }}>
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
              width: ['100%', 440],
              m: '0 auto',
              fontWeight: 600,
            }}
          >
            Apps design that provides unique experience across platforms ⚡️
          </Heading>

          <Flex sx={{ position: 'absolute', display: ['none', 'block'] }}>
            <Box sx={{ position: 'relative', top: '-150px' }}>
              <span sx={{ position: 'relative', left: '300px', top: '49px' }}>
                <Oval1x />
              </span>
              <span sx={{ position: 'relative', left: '495px' }}>
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
                display: 'flex',
                justifyContent: 'center',
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
            <AppDesignImg
              sx={{
                gridRow: [1, 'unset'],
                gridColumn: [1, 'unset'],
                maxWidth: '250px',
                maxHeight: '200px',
              }}
            />
          </Flex>
        </Box>
        <hr
          sx={{
            border: '1px solid #A7ADFF',
            position: 'relative',
            bottom: '-60px',
            opacity: '0.2',
          }}
        />
      </Box>
    </div>
  );
};

export default AppDesign;
