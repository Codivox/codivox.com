/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import ReactNativImg from '../../images/reactNativImg';
import Oval1x from '../../images/oval1x';
import Oval2x from '../../images/oval2x';

const ReactNativ: React.FC = () => {
  const brandTitle =
    'Pay less, reach more people, get apps without compromises';
  const brandSubtitle =
    'Maximize code reuse between platforms while keeping the UI native, cutting costs in half.';
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
              width: ['100%', 492],
              m: '0 auto',
              fontWeight: 600,
            }}
          >
            React Native for maximum efficiency
          </Heading>

          <Flex sx={{ position: 'absolute', display: ['none', 'block'] }}>
            <Box sx={{ position: 'relative', top: '-150px' }}>
              <span sx={{ position: 'relative', left: '281px', top: '34px' }}>
                <Oval1x />
              </span>
              <span
                sx={{ position: 'relative', left: '650px', bottom: '25px' }}
              >
                <Oval2x />
              </span>
            </Box>
          </Flex>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['100%', '50% 45%'],
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
                maxWidth: '450px',
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
            <ReactNativImg
              sx={{
                gridRow: [1, 'unset'],
                gridColumn: [1, 'unset'],
                maxWidth: '250px',
              }}
            />
          </Flex>
        </Box>
        <hr
          sx={{
            border: '1px solid #A7ADFF',
            position: 'relative',
            bottom: '-45px',
            opacity: 0.2,
          }}
        />
      </Box>
    </div>
  );
};

export default ReactNativ;
