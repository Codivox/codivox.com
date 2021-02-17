import { Flex } from 'theme-ui';

export default {
  flex: {
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 30,
      border: '2px solid rgba(102, 112, 253, 0.05)',
      boxShadow: ' 0px 0px 5px rgba(102, 112, 253, 0.05)',
      '&:hover': {
        border: '2px dashed #6670FD',
        background: 'rgba(244, 245, 255, 0.5)',
        transition: 'all .5s ease-in-out',
        color: '#5D67EE',
      },
    },
    phase: {
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 16,
      border: '1px solid #eeeeff',
      '&:hover': {
        border: '1px solid #eeeeff',
        transition: 'all .3s ease-in',
        textDecorationLine: 'none',
        px: '32px',
        boxShadow: '-40px 50px 80px 20px rgb(242 243 255)',
      },
    },
    phaseV2: {
      display: ['flex', 'flex'],
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: ['center', 'left'],
      flexDirection: ['column', 'row'],
      borderRadius: 16,
      border: '1px solid #eeeeff',
      '&:hover': {
        transition: 'all .3s ease-in',
        textDecorationLine: 'none',
        border: '1px solid #eeeeff',
        boxShadow: '-40px 50px 80px 20px rgb(242 243 255)',
        // px: '32px',
      },
    },
  },
};
