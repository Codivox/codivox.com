/** @jsx jsx */
import { Box, Heading, jsx, Flex } from 'theme-ui';
import React from 'react';
import Phase1 from '../../images/phase1';
import PhaseRocket from '../../images/phaseRocket';
import PhaseEng from '../../images/phaseEng';

const Phase: React.FC = () => {
  return (
    <div
      sx={{
        minHeight: '1168px',
        maxWidth: 1110,
        padding: `0 1.0875rem 1.45rem`,
        m: '0 auto',
      }}
    >
      <Box sx={{ textAlign: 'center', pt: '147px' }}>
        <Heading
          sx={{
            fontSize: ['26px', '38px'],
            width: ['100%', 577],
            m: '0 auto',
            fontWeight: 600,
          }}
        >
          Performance-Tuned Websites
        </Heading>
        <p sx={{ opacity: '0.85', width: ['100%', 533], m: '0 auto' }}>
          We craft each website to achieve clear objectives and create
          meaningful user experiences that drive business forward.
        </p>
      </Box>

      <div
        sx={{
          minHeight: '699px',
          display: [null, 'flex'],
          alignItems: 'center',
          mt: '102px',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr 1fr 1fr'],
            columnGap: '30px',
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
                fontSize: '28px',
                mt: '20px',
                opacity: 0.8,
                lineHeight: '140%',
              }}
            >
              Evaluate & Strategize
            </Heading>
            <p
              sx={{
                color: 'rgba(20, 22, 51, 0.5)',
                lineHeight: '160%',
              }}
            >
              We’ll work together to uncover clear business objectives for your
              site. Because our success is so dependent on engaging your website
              audience, we take a user-centric approach. We analyze on-site
              interaction and behavior patterns to develop a clear picture of
              your customers’ needs and identify the best strategies to achieve
              them.
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
            <PhaseEng />
            <Heading
              sx={{
                fontSize: '28px',
                mt: '20px',
                opacity: 0.8,
                lineHeight: '140%',
              }}
            >
              Design & Develop
            </Heading>
            <p
              sx={{
                color: 'rgba(20, 22, 51, 0.5)',
                lineHeight: '160%',
              }}
            >
              With objectives and strategy identified, we begin to design the
              experience we want users to have and the behaviors we want them to
              take. This means focusing the information architecture, content,
              and user experience (UX). We package all of this in a compelling
              visual design and work closely with our developers as they bring
              the site to life. Rest assured that our developers use clean,
              modern code to create a sustainable foundation for your site.
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
            <PhaseRocket />
            <Heading
              sx={{
                fontSize: '28px',
                mt: '20px',
                opacity: 0.8,
                lineHeight: '140%',
              }}
            >
              Optimize & Launch
            </Heading>
            <p
              sx={{
                color: 'rgba(20, 22, 51, 0.5)',
                lineHeight: '160%',
              }}
            >
              To be certain your site performs, we take extra time before
              launching it to ensure it’s optimized to meet objectives. Google
              bots continuously measure websites for speed, and the ones that
              load faster typically earn a higher ranking in search results. We
              automatically test our websites from many different places all
              over the world to determine the average speed. It being fast in
              San Francisco doesn't matter much if your customers are on the
              other side of the planet. Although we can't control everything, we
              go to great lengths to ensure that users can access your site on
              any device and on most connections -- no matter how fast.
            </p>
          </Flex>
        </Box>
      </div>
    </div>
  );
};

export default Phase;
