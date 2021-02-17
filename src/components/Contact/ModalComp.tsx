/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';
import React from 'react';
// @ts-ignore
import Modal from 'react-modal';

import Warning from '../../images/warning';
import Union from '../../images/union';
import Cross from '../../images/cross';
import Search from '../../images/search';
import { Link } from 'gatsby';

Modal.setAppElement('#___gatsby');

const ModalComp: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    modalIsOpen && (document.body.style.overflow = 'hidden');
    !modalIsOpen && (document.body.style.overflow = 'unset');
  }, [modalIsOpen]);

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
        display: ['none', 'none', 'flex'],
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
            gridTemplateColumns: ['3fr 2fr'],
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
                fontSize: ['12px', '12px', '15px'],
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
                fontSize: '15px',
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
        contentLabel="See if we match Modal"
        sx={{
          background: '#fff',
          maxHeight: '508px',
          maxWidth: '714px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '10px',
          p: '20px',
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
                <li>Requiring unrealistic milestones</li>
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
            think we are a good match,
          </p>

          <Flex
            sx={{
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=923091313666"
              target="_blank"
              rel="noopener noreferrer"
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
              Let's talk ⚡️
            </a>
            <Link
              to={'/#work-process'}
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
            </Link>
          </Flex>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComp;
