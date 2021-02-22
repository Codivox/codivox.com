/** @jsx jsx */
import { Box, Heading, jsx, Flex } from 'theme-ui';
import React from 'react';
import PhaseDiamond from '../../images/phaseDiamond';
import PhasePhto from '../../images/phasePhto';
import PhaseEng from '../../images/phaseEng';
import PhaseRocket from '../../images/phaseRocket';

const Phase: React.FC = () => {
  return (
    <div
      sx={{
        minHeight: '640px',
        display: ['null', 'block'],
        alignItems: 'center',
        pt: 95,
      }}
    >
      <Box
        sx={{
          m: '0 auto',
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr 1fr'],
            gridTemplateRows: '1fr',
            columnGap: '30px',
            minHeight: '197px',
            pt: 56,
            rowGap: '30px',
          }}
        >
          <Flex
            sx={{
              variant: 'flex.phaseV2',
              lineHeight: '2%',
              p: ['0px 26px 0px 0px'],
            }}
          >
            <PhaseDiamond
              sx={{
                m: ['0 auto', null],
                height: ['50%', '100%'],
                width: ['50%', '100%'],
              }}
            />
            <div>
              <p
                sx={{
                  color: '#5A54FF',
                }}
              >
                Phase 1
              </p>
              <Heading
                sx={{
                  fontSize: '24px',
                  opacity: 0.8,
                  color: '#141633',
                }}
              >
                Research & Plan
              </Heading>
              <p
                sx={{
                  color: 'rgba(20, 22, 51, 0.5)',
                  lineHeight: '160%',
                  fontSize: '14px',
                  mt: 0,
                }}
              >
                Just like building a house, we start with architecture.
                Together, we’ll find the most effective solution to your unique
                business challenges.
              </p>
            </div>
          </Flex>

          <Flex
            sx={{
              variant: 'flex.phaseV2',
              lineHeight: '2%',
              p: ['0px 26px 0px 0px'],
            }}
          >
            <PhasePhto
              sx={{
                m: ['0 auto', null],
                height: ['50%', '100%'],
                width: ['50%', '100%'],
              }}
            />
            <div>
              <p
                sx={{
                  color: '#5A54FF',
                }}
              >
                Phase 2
              </p>
              <Heading
                sx={{
                  fontSize: '24px',
                  opacity: 0.8,
                  color: '#141633',
                }}
              >
                Prototype & Design
              </Heading>
              <p
                sx={{
                  color: 'rgba(20, 22, 51, 0.5)',
                  lineHeight: '160%',
                  fontSize: '14px',
                  mt: 0,
                }}
              >
                A clickable, interactive prototype tests assumptions. It also
                ensures your app will be intuitive, easy to use, and meets your
                users’ needs.
              </p>
            </div>
          </Flex>

          <Flex
            sx={{
              variant: 'flex.phaseV2',
              lineHeight: '2%',
              p: ['0px 26px 0px 0px'],
            }}
          >
            <PhaseEng
              sx={{
                m: ['0 auto', null],
                height: ['50%', '100%'],
                width: ['50%', '100%'],
              }}
            />
            <div>
              <p
                sx={{
                  color: '#5A54FF',
                }}
              >
                Phase 3
              </p>
              <Heading
                sx={{
                  fontSize: '24px',
                  opacity: 0.8,
                  color: '#141633',
                }}
              >
                Engineer & Develop
              </Heading>
              <p
                sx={{
                  color: 'rgba(20, 22, 51, 0.5)',
                  lineHeight: '160%',
                  fontSize: '14px',
                  mt: 0,
                }}
              >
                After you’ve approved the final high-fidelity design, our team
                gets to work solving the technical puzzles needed to bring your
                app to life.
              </p>
            </div>
          </Flex>
          <Flex
            sx={{
              variant: 'flex.phaseV2',
              lineHeight: '2%',
              p: ['0px 26px 0px 0px'],
            }}
          >
            <PhaseRocket
              sx={{
                m: ['0 auto', null],
                height: ['50%', '100%'],
                width: ['50%', '100%'],
              }}
            />
            <div>
              <p
                sx={{
                  color: '#5A54FF',
                }}
              >
                Phase 4
              </p>
              <Heading
                sx={{
                  fontSize: '24px',
                  opacity: 0.8,
                  color: '#141633',
                }}
              >
                Test & Deploy
              </Heading>
              <p
                sx={{
                  color: 'rgba(20, 22, 51, 0.5)',
                  lineHeight: '160%',
                  fontSize: '14px',
                  mt: 0,
                }}
              >
                Our engineering team thoroughly tests the code and eliminates
                any problems. They also oversee deployment for a smooth launch.
              </p>
            </div>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Phase;
