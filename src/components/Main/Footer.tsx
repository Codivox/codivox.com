/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';

import { Link } from 'gatsby';
import CodivoxWhite from '../../images/codivox-white';
import Linkedin from '../../images/linkedin';
import Fb from '../../images/fb';
import Twitter from '../../images/twitter';
import Insta from '../../images/insta';
import Dots from '../../images/dots';

const Footer: React.FC = () => {
  const footerSubtitle =
    'Codivox is a fully remote Digital Agency. We design and develop websites and web apps, offers MVP for startups, technical consultion and IT Outsourcing. We build blazing fast and useful digital products from scratch, from product design through documentation to project implementation, both frontend and backend.';
  const services = [
    {
      content: 'Design',
      link: '/design',
    },
    {
      content: 'Web Development',
      link: '/web-development',
    },
    {
      content: 'App Development',
      link: '/app-development',
    },
    {
      content: 'Technical Consulting',
      link: '/',
    },
  ];

  const blog = [
    {
      content: 'Technology',
      link: '/blog',
    },
  ];
  const estimate = [
    {
      content: 'Contact Us',
      link: '/contact',
    },
  ];

  return (
    <footer
      sx={{
        background: 'ghostWhite',
        minHeight: '424px',
        display: 'block',
        position: 'absolute',
        width: '100%',
        padding: '0 1.0875rem',
      }}
    >
      <div
        sx={{
          position: 'absolute',
          right: 10,
          bottom: 10,
          display: ['none', 'block', 'block', 'block'],
        }}
      >
        <Dots />
      </div>

      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          // textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: 1110,
            display: 'grid',
            gridTemplateColumns: ['1fr', '3fr 1fr 1fr 1fr'],
            gridTemplateRows: ['1fr'],
            // justifyItems: 'center',
            gap: 4,
            mt: '4em',
          }}
        >
          <div
            sx={{
              mt: '1em',
              display: 'grid',
              gridTemplateColumns: ['1fr'],
              gridTemplateRows: ['1fr'],
              justifyItems: ['center', 'left', 'left', 'left'],
              textAlign: ['center', 'left', 'left', 'left'],
              px: [11, 0, 0, 0],
            }}
          >
            <Link to="/" sx={{ textDecoration: 'none' }}>
              <Heading sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <CodivoxWhite />
                <span sx={{ ml: 2, color: 'text' }}>Codivox</span>
                <span sx={{ color: (theme) => `${theme.colors.main}` }}>.</span>
              </Heading>
            </Link>
            <p sx={{ opacity: '0.85', fontSize: '14px' }}>{footerSubtitle}</p>

            <div
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                mt: '20px',
                mb: '25px',
                display: ['inline-block', 'none', 'none', 'none'],
              }}
            >
              <Link
                to="/#services"
                sx={{
                  textDecoration: 'none',
                  px: 10,
                  color: 'text',
                }}
              >
                Services
              </Link>
              <Link
                to="/blog"
                sx={{
                  textDecoration: 'none',
                  px: 10,
                  color: 'text',
                }}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                sx={{
                  textDecoration: 'none',
                  px: 10,
                  color: 'text',
                }}
              >
                Get Estimate
              </Link>
            </div>
            <div>
              <a
                href="https://facebook.com/codivox"
                target="_blank"
                rel="noreferrer"
                sx={{ p: 2, pl: 0, textDecoration: 'none' }}
              >
                <Fb />
                <span
                  sx={{
                    fontSize: '0 !important',
                    height: 1,
                    overflow: 'hidden',
                  }}
                >
                  Facebook
                </span>
              </a>
              <a
                href="https://twitter.com/codivox"
                target="_blank"
                rel="noreferrer"
                sx={{ p: 2, textDecoration: 'none' }}
              >
                <Twitter />
                <span
                  sx={{
                    fontSize: '0 !important',
                    height: 1,
                    overflow: 'hidden',
                  }}
                >
                  Twitter
                </span>
              </a>
              <a
                href="https://instagram.com/codivox"
                target="_blank"
                rel="noreferrer"
                sx={{ p: 2, textDecoration: 'none' }}
              >
                <Insta />
                <span
                  sx={{
                    fontSize: '0 !important',
                    height: 1,
                    overflow: 'hidden',
                  }}
                >
                  Instagram
                </span>
              </a>
              <a
                href="https://linkedin.com/company/codivox"
                target="_blank"
                rel="noreferrer"
                sx={{ p: 2, textDecoration: 'none' }}
              >
                <Linkedin />
                <span
                  sx={{
                    fontSize: '0 !important',
                    height: 1,
                    overflow: 'hidden',
                  }}
                >
                  Linkedin
                </span>
              </a>
            </div>
          </div>
          <div
            sx={{
              display: ['none', 'block', 'block'],
            }}
          >
            <Heading as={'h4'} sx={{ mt: '2rem', mb: '1rem' }}>
              Services
            </Heading>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              {services.map((service) => {
                const { content, link } = service;
                return (
                  <Link
                    key={content}
                    to={link}
                    sx={{
                      textDecoration: 'none',
                      color: 'text',
                      opacity: '0.85',
                      fontSize: '14px',
                    }}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>

          <div
            sx={{
              display: ['none', 'block', 'block'],
            }}
          >
            <Heading as={'h4'} sx={{ mt: '2rem', mb: '1rem' }}>
              Blog
            </Heading>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              {blog.map((blog) => {
                const { content, link } = blog;
                return (
                  <Link
                    to={link}
                    key={content}
                    sx={{
                      textDecoration: 'none',
                      color: 'text',
                      opacity: '0.85',
                      fontSize: '14px',
                    }}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>

          <div
            sx={{
              display: ['none', 'block', 'block'],
            }}
          >
            <Heading as={'h4'} sx={{ mt: '2rem', mb: '1rem' }}>
              Get Estimate
            </Heading>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              {estimate.map((est) => {
                const { content, link } = est;
                return (
                  <Link
                    to={link}
                    key={content}
                    sx={{
                      textDecoration: 'none',
                      color: 'text',
                      opacity: '0.85',
                      fontSize: '14px',
                    }}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </Box>
      </div>
      <div
        sx={{
          textAlign: 'center',
          opacity: '0.8',
          fontSize: '14px',
          mt: ['22px', '80px', '80px', '80px'],
        }}
      >
        All rights reserved by © Codivox {new Date().getFullYear()} -
        <Link to="/privacy-policy" sx={{ color: '#6670FD', ml: '5px' }}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
