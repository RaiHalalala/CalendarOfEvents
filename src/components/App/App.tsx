import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Routers from 'components/Routers';
import Layout from 'components/Layout';
import Loader from 'components/Loader';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1890ff',
    },
    secondary: {
      main: '#bcbcbc',
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
