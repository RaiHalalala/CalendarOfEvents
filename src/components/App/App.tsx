import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Routers from 'components/Routers';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
import { palette } from '../../styles/palette';

declare module '@mui/material' {
  interface ButtonPropsVariantOverrides {
    custom: true;
    customDanger: true;
    customOutlined: true;
  }
}

const commonStyleForButton = {
  fontWeight: 'bold',
  borderRadius: '50px',
  fontSize: '14px',
  padding: '6px 20px',
  letterSpacing: '0.005rem',
};

const theme = createTheme({
  palette,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            ...commonStyleForButton,
            color: 'white',
            background: palette.primary.main,
            border: `1px solid ${palette.primary.main}`,
            textTransform: 'inherit',
            '&:hover': {
              background: palette.primary.dark,
            },
          },
        },
        {
          props: { variant: 'customDanger' },
          style: {
            ...commonStyleForButton,
            color: 'white',
            background: palette.warning.main,
            textTransform: 'inherit',
            '&:hover': {
              background: palette.warning.dark,
            },
          },
        },
        {
          props: { variant: 'customOutlined' },
          style: {
            ...commonStyleForButton,
            color: palette.secondary.main,
            border: `1px solid ${palette.secondary.main}`,
            textTransform: 'inherit',
            '&:hover': {
              outline: `1px solid ${palette.secondary.main}`,
            },
          },
        },
      ],
    },
  },
});
const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <React.Suspense fallback={<Loader />}>
        <Routers />
      </React.Suspense>
    </Layout>
  </ThemeProvider>
);

export default App;
