/** @jsx jsx */
import { Box, Flex, Heading, jsx } from 'theme-ui';
import { Link } from 'gatsby';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Man from '../../images/man';
import Conplus from '../../images/conplus';
import Clock from '../../images/clock';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
});

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const MySwal = withReactContent(Swal);

  const onSubmit = (data: any) => {
    fetch('/.netlify/functions/email', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((result) => result.json())
      .then((response) => {
        if (response.success) {
          MySwal.fire({
            icon: 'success',
            title: 'Awesome 🎉',
            text: response.message,
            showConfirmButton: false,
            showCloseButton: true,
          });
          reset();
        } else {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
            showConfirmButton: false,
            showCloseButton: true,
            footer: `Reach us at &nbsp <a href="mailto:hello@codivox.com">hello@codivox.com</a>`,
          });
        }
      })
      .catch((e) => {
        console.log(e, 'is error');
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showCloseButton: true,
          showConfirmButton: false,
          footer: `Reach us at &nbsp <a href="mailto:hello@codivox.com">hello@codivox.com</a>`,
        });
      });
  };

  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(228 229 255) 25%, rgb(244, 245, 255) 100%)`,
      }}
    >
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr', '1fr', '2fr 1.1fr'],
          gridTemplateRows: '1fr',
          gap: 4,
          pt: 50,
        }}
      >
        <div>
          <Flex
            sx={{
              display: 'block',
            }}
          >
            <Heading as={'h3'}>Let's work together.</Heading>
            <p sx={{ mt: '4px' }}>
              Fill the form, or contact us via{' '}
              <a
                href="mailto:hello@codivox.com"
                style={{ textDecoration: 'none' }}
              >
                hello@codivox.com
              </a>
            </p>
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', '1fr 1fr'],
                // gridTemplateRows: ['1fr 1fr 1fr 1fr'],
              }}
            >
              <Box>
                <label sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
                  What's your name?*
                </label>
                <input
                  sx={{
                    background: 'rgba(20, 22, 51, 0.1)',
                    height: '50px',
                    width: ['100%', '90%', '90%', '90%'],
                    borderRadius: '5px',
                    border: 'none',
                    boxShadow: '0px 0px 10px 0px rgba(20, 22, 51, 0.1)',
                    display: 'block',
                    mb: '20px',
                    px: '15px',
                    fontSize: '16px',
                  }}
                  name="fullName"
                  ref={register}
                />
              </Box>
              <Box>
                <label sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
                  What's your email?*
                </label>
                <input
                  sx={{
                    background: 'rgba(20, 22, 51, 0.1)',
                    height: '50px',
                    width: ['100%', '90%', '90%', '90%'],
                    borderRadius: '5px',
                    border: 'none',
                    boxShadow: '0px 0px 10px 0px rgba(20, 22, 51, 0.1)',
                    display: 'block',
                    mb: '20px',
                    px: '15px',
                    fontSize: '16px',
                  }}
                  name="email"
                  ref={register}
                />
              </Box>
              <Box>
                <label sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
                  Phone Number(Optional)
                </label>
                <input
                  sx={{
                    background: 'rgba(20, 22, 51, 0.1)',
                    height: '50px',
                    width: ['100%', '90%', '90%', '90%'],
                    borderRadius: '5px',
                    border: 'none',
                    boxShadow: '0px 0px 10px 0px rgba(20, 22, 51, 0.1)',
                    display: 'block',
                    mb: '20px',
                    px: '15px',
                    fontSize: '16px',
                  }}
                  name="phoneNumber"
                  ref={register}
                />
              </Box>
              <Box sx={{ pb: '20px' }}>
                <label sx={{ fontWeight: 'bold', mb: 15, display: 'block' }}>
                  Do you prefer we call or email you?
                </label>

                <label sx={{ mr: '5px' }}>
                  <input
                    sx={{ mr: '5px' }}
                    type="radio"
                    name="preference"
                    value="Call"
                    ref={register}
                  />
                  Call
                </label>

                <label sx={{ mr: '5px' }}>
                  <input
                    sx={{ mr: '5px' }}
                    type="radio"
                    name="preference"
                    value="Email"
                    ref={register}
                  />
                  Email
                </label>

                <label>
                  <input
                    sx={{ mr: '5px' }}
                    type="radio"
                    name="preference"
                    value="Either"
                    ref={register}
                  />
                  Either
                </label>
              </Box>
              <Box>
                <label sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
                  Tell us a little bit about your project.
                </label>
                <textarea
                  sx={{
                    background: 'rgba(20, 22, 51, 0.1)',
                    height: '100px',
                    width: ['100%', '190%', '190%', '190%'],
                    borderRadius: '5px',
                    border: 'none',
                    boxShadow: '0px 0px 10px 0px rgba(20, 22, 51, 0.1)',
                    display: 'block',
                    p: '15px',
                    fontSize: '16px',
                  }}
                  name="text"
                  ref={register}
                />
              </Box>
            </Box>
            {(errors.fullName || errors.email) && (
              <span
                style={{
                  color: 'red',
                  position: 'relative',
                  fontSize: '15px',
                }}
              >
                Name and valid email are required, we promise not to spam 🙏🏼
              </span>
            )}
            <Box
              sx={{
                // width: '150%',
                mt: '10px',
                mb: '60px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <input
                type="submit"
                value="Send Message"
                sx={{ variant: 'buttons.prime', width: ['50%', 210] }}
              />
              <Link
                to="/privacy-policy"
                sx={{ color: '#6670FD', ml: '49.37px' }}
              >
                Privacy Policy{' '}
              </Link>
            </Box>
          </form>
        </div>

        <div sx={{}}>
          <ul
            sx={{
              textAlign: 'center',
              padding: 0,
              maxWidth: '320px',
              margin: '0 auto',
              '& > *': {
                listStyle: 'none',
                lineHeight: 0.5,
                mb: '50px',
              },
            }}
          >
            <li>
              <Clock />
              <h4>Fast response</h4>
              <p>We'll get back to you next working day.</p>
            </li>
            <li>
              <Conplus />
              <h4>Consulting included</h4>
              <p>We need to sit down and get to know details.</p>
            </li>
            <li>
              <Man />
              <h4>Personalized offer</h4>
              <p
                sx={{
                  lineHeight: 1.4,
                }}
              >
                We provide every offer from scratch to meet your specific needs.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
