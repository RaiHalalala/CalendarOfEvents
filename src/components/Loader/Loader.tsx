import { CircularProgress, Box } from '@mui/material';

const Loader = () => (
  <Box
    justifyContent="center"
    alignItems="center"
    sx={{ display: 'flex', height: '100%', width: '100%' }}>
    <CircularProgress />
  </Box>
);

export default Loader;
