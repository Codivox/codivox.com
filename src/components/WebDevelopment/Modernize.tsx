/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import ModernizeImg from '../../images/ModernizeImg';
import Oval1x from '../../images/oval1x';
import Oval2x from '../../images/oval2x';
import Ovalx from '../../images/Ovalx';

const Modernize: React.FC = () => {
  const brandTitle = 'Make your users amazed with blazing fast Wordpress site';
  const brandSubtitle =
    'We build high performance front end for headless Wordpress which will provide you good of both worlds.';
  return (
    <div sx={{ background: 'rgba(244, 245, 255, 0.5)', minHeight: '606px' }}>
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
              width: ['100%', 492],
              m: '0 auto',
              fontWeight: 600,
            }}
          >
            Modernize your wordpress site using Gatsby
          </Heading>

          <Flex sx={{ position: 'absolute', display: ['none', 'block'] }}>
            <Box sx={{ position: 'relative', top: '-150px' }}>
              <span sx={{ position: 'relative', left: '281px', top: '34px' }}>
                <Oval1x />
              </span>
              <span
                sx={{ position: 'relative', left: '632px', bottom: '12px' }}
              >
                <Oval2x />
              </span>

              <span
                sx={{ position: 'relative', left: '265px', bottom: '64px' }}
              >
                <Ovalx />
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
              height: ['calc( 300px )', 'calc( 400px )'],
              gridTemplateColumns: ['100%'],
              gridColumn: [1, null],
              textAlign: ['center', 'left'],
            }}
          >
            <Heading
              sx={{
                fontSize: ['27px', '28px'],
                maxWidth: '450px',
                mt: ['10px', '100px'],
              }}
            >
              {brandTitle}
            </Heading>
            <p sx={{ opacity: '0.85', mt: ['10px', '-35px'] }}>
              {brandSubtitle}
            </p>
          </Flex>
          <ModernizeImg
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

export default Modernize;
