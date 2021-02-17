/** @jsx jsx */
import { Box, Heading, jsx, Flex } from 'theme-ui';
import React from 'react';
import Phase1 from '../../images/phase1';
import Phase2 from '../../images/phase2';
import Phase3 from '../../images/phase3';

const Phase: React.FC = () => {
  return (
    <div
      sx={{
        minHeight: ['756px'],
        display: [null, 'flex'],
        alignItems: 'center',
        mt: [0, '40px'],
        mb: [0, '55px'],
        maxWidth: 1110,
        padding: `0 1.0875rem 1.45rem`,
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr 1fr'],
          gridTemplateRows: '1fr',
          columnGap: '30px',
          minHeight: '556px',
        }}
      >
        <Flex
          sx={{
            variant: 'flex.phase',
            mb: ['20px', '0px'],
            flexDirection: 'column',
            px: '32px',
            textAlign: 'center',
          }}
        >
          <p
            sx={{
              color: 'rgba(20, 22, 51, 0.5)',
            }}
          >
            Phase 1
          </p>
          <Phase1 />
          <Heading
            sx={{
              fontSize: '22px',
              mt: '20px',
              opacity: 0.8,
              lineHeight: '140%',
            }}
          >
            Strategy before execution
          </Heading>
          <p
            sx={{
              color: 'rgba(20, 22, 51, 0.5)',
              lineHeight: '160%',
            }}
          >
            We start with an in-depth discussion of your business goals and
            challenges. We’ll ask big questions like, What is your vision? Who
            is your target audience? What keeps you up at night? Papyrus or
            Comic Sans? (Kidding!) Together, we’ll agree on the problems we’re
            trying to solve and create a set of goals to measure our success.
          </p>
        </Flex>

        <Flex
          sx={{
            variant: 'flex.phase',
            mb: ['20px', '0px'],
            flexDirection: 'column',
            px: '32px',
            textAlign: 'center',
          }}
        >
          <p
            sx={{
              color: 'rgba(20, 22, 51, 0.5)',
            }}
          >
            Phase 2
          </p>
          <span
            sx={{
              mt: '-18px',
            }}
          >
            <Phase2 />
          </span>
          <Heading
            sx={{
              fontSize: '22px',
              opacity: 0.8,
              lineHeight: '140%',
              mt: '-5px',
            }}
          >
            Rapid, iterative prototyping
          </Heading>
          <p
            sx={{
              color: 'rgba(20, 22, 51, 0.5)',
              lineHeight: '160%',
            }}
          >
            Then we move into wireframing and prototyping. If needed, we’ll also
            conduct user research and testing to ensure that we’re meeting your
            end users’ needs. Our rapid prototyping process allows us to quickly
            experiment and iterate, and we’ll keep you involved at every step of
            the way.
          </p>
        </Flex>
        <Flex
          sx={{
            variant: 'flex.phase',
            mb: ['20px', '0px'],
            flexDirection: 'column',
            px: '32px',
            textAlign: 'center',
          }}
        >
          <p
            sx={{
              color: 'rgba(20, 22, 51, 0.5)',
            }}
          >
            Phase 3
          </p>
          <Phase3 />
          <Heading
            sx={{
              fontSize: '22px',
              opacity: 0.8,
              lineHeight: '140%',
              mt: '20px',
            }}
          >
            Pushing pixels to perfection
          </Heading>
          <p
            sx={{
              color: 'rgba(20, 22, 51, 0.5)',
              lineHeight: '160%',
            }}
          >
            This is the part where we make your app look good. Really,
            ridiculously good. Whether we’re sketching a custom icon or fixing
            that last pixel, we’re committed to exceeding your (and more
            importantly, your users’) expectations.
          </p>
        </Flex>
      </Box>
    </div>
  );
};

export default Phase;
