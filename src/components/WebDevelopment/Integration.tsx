/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import IntegrationImg from '../../images/IntegrationImg';
import Oval1xT from '../../images/oval1xT';
import Oval2x from '../../images/oval2x';

const Integration: React.FC = () => {
  const brandTitle =
    'Payment gateways, email & SMS integration, we can do it all.';
  const brandSubtitle =
    'We deliver solid product integrations that can automate your business processes.';
  return (
    <div sx={{ background: 'rgba(244, 245, 255, 0.5)', minHeight: '626px' }}>
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
          }}
        />
        <Box sx={{ textAlign: 'center', pt: '77px' }}>
          <Heading
            sx={{
              fontSize: ['26px', '38px'],
              width: ['100%', 577],
              m: '0 auto',
              fontWeight: 600,
            }}
          >
            Integrate your existing web app to external systems
          </Heading>

          <Flex sx={{ position: 'absolute', display: ['none', 'block'] }}>
            <Box sx={{ position: 'relative', top: '-150px' }}>
              <span sx={{ position: 'relative', left: '710px', top: '37px' }}>
                <Oval1xT />
              </span>
              <span
                sx={{
                  position: 'relative',
                  left: '221px',
                  top: '-17px',
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
              height: ['calc( 300px )', 'calc( 400px )'],
              gridTemplateColumns: ['100%'],
              gridColumn: [1, null],
              textAlign: ['center', 'left'],
            }}
          >
            <Heading
              sx={{
                fontSize: ['27px', '28px'],
                maxWidth: '520px',
                mt: ['10px', '100px'],
                width: ['100%', 445],
              }}
            >
              {brandTitle}
            </Heading>
            <p sx={{ opacity: '0.85', mt: ['10px', '-35px'] }}>
              {brandSubtitle}
            </p>
          </Flex>
          <IntegrationImg
            sx={{
              gridRow: [1, 'unset'],
              gridColumn: [1, 'unset'],
              width: '100%',
            }}
          />
        </Box>
        <hr
          sx={{
            border: '1px solid #A7ADFF',
            position: 'relative',
            bottom: '-33px',
          }}
        />
      </Box>
    </div>
  );
};

export default Integration;
