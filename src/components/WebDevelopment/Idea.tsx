/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import IdeaImg from '../../images/IdeaImg';

const Idea: React.FC = () => {
  const brandTitle =
    'From high-converting landing pages to complex enterprise and e-commerce apps';
  const brandSubtitle =
    'We provide good user experience, high performance, SEO friendly websites with modern technology.';
  return (
    <Box
      sx={{
        m: '0 auto',
        maxWidth: 1110,
        padding: `0 1.0875rem 1.45rem`,
        minHeight: '685px',
      }}
    >
      <Box sx={{ textAlign: 'center', pt: '77px' }}>
        <Heading
          sx={{
            fontSize: ['26px', '36px'],
            width: ['100%', '512px'],
            m: '0 auto',
            fontWeight: 600,
          }}
        >
          Let’s turn your idea into stunning web app
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
        <IdeaImg
          sx={{
            width: '100%',
          }}
        />
        <Flex
          sx={{
            display: 'grid',
            gridTemplateRows: 'auto auto auto',
            height: ['calc( 300px )', 'calc( 400px )'],
            gridTemplateColumns: ['100%'],
            textAlign: ['center', 'left'],
          }}
        >
          <Heading
            sx={{
              fontSize: ['27px', '28px'],
              maxWidth: '455px',
              mt: ['10px', '100px'],
            }}
          >
            {brandTitle}
          </Heading>
          <p sx={{ opacity: '0.85', mt: ['10px', '-35px'] }}>{brandSubtitle}</p>
        </Flex>
      </Box>
    </Box>
  );
};

export default Idea;
