/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';
import React from 'react';
// @ts-ignore
import Modal from 'react-modal';

import Warning from '../../images/warning';
import Union from '../../images/union';
import Cross from '../../images/cross';
import Search from '../../images/search';

// Modal.setAppElement('#root');

const ModalComp: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      sx={{
        backgroundColor: '#6670FD',
        height: '50px',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <div
        sx={{
          margin: '0 auto',
          width: '1110px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: ['1fr 1fr'],
            gridTemplateRows: ['1fr'],
            px: 3,
          }}
        >
          <Flex
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            <Warning />
            <p
              sx={{
                paddingLeft: '10px',
              }}
            >
              Hey there, before you decide to contact us, see if we match.
            </p>
          </Flex>

          <Flex
            sx={{
              justifySelf: 'end',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <button
              sx={{
                pr: '5px',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontWeight: 'bold',
                textDecoration: 'underline',
                fontSize: '16px',
              }}
              onClick={openModal}
            >
              See if we match
            </button>
            <Union />
          </Flex>
        </Box>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        sx={{
          background: '#fff',
          height: '508px',
          width: '714px',
          margin: '150px auto 0',
          borderRadius: '10px',
          px: 32,
        }}
      >
        <button
          sx={{
            float: 'right',
            background: 'none',
            border: 'none',
            mt: '20px',
          }}
          onClick={closeModal}
        >
          <Cross />
        </button>
        <div>
          <Flex
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Search />
            <div
              sx={{
                lineHeight: 0.5,
                ml: '20px',
              }}
            >
              <h3
                sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                }}
              >
                Are we a good match?{' '}
              </h3>
              <p
                sx={{
                  fontSize: '1rem',
                }}
              >
                Before we begin our long journey together, we need to be a
                perfect fit
              </p>
            </div>
          </Flex>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: ['1fr 1fr'],
              // gridTtemplateRrows: ['1fr'],
            }}
          >
            <div>
              <h5
                sx={{
                  ml: '22px',
                  color: '#00AC52',
                  fontSize: '18px',
                }}
              >
                What we do best:
              </h5>
              <ul
                sx={{
                  '& > *': {
                    pl: '5px',
                  },
                }}
              >
                <li>Complex, long-term apps</li>
                <li>Doing things from scratch </li>
                <li>React/Gatsby/Next websites</li>
                <li>Full-stack & JAM-stack apps</li>
                <li>React Native mobile apps</li>
              </ul>
            </div>
            <div>
              <h5
                sx={{
                  ml: '22px',
                  color: '#FF003D',
                  fontSize: '18px',
                }}
              >
                What we are not interested in:
              </h5>
              <ul
                sx={{
                  '& > *': {
                    pl: '5px',
                  },
                }}
              >
                <li>Non communicative approach</li>
                <li>Getting things done by cutting corners</li>
                <li>Doing things with low budget and a hurry</li>
                <li>Not valuing our time and expertise </li>
              </ul>
            </div>
          </Box>
          <p
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              px: 70,
            }}
          >
            Our goal is to be proud of products we build for our clients. If you
            think we are a good match, you can:
          </p>

          <Flex
            sx={{
              display: 'table',
              margin: '0 auto',
            }}
          >
            <button
              sx={{
                variant: 'buttons.outlined',
                background: '#fff',
                fontWeight: 'bold',
                color: '#6670FD',
                width: 140,
                height: 50,
                mr: 10,
                ml: 0,
                fontSize: '1rem',
              }}
            >
              Contact Us
            </button>
            <button
              sx={{
                variant: 'buttons.prime',
                background: ['#6670FD'],
                color: ['#fff'],
                width: 140,
                height: 50,
                ml: 10,
              }}
            >
              How we work
            </button>
          </Flex>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComp;
