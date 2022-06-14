import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { palette } from 'styles/palette';

export const CssDateInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    position: 'relative',
    paddingRight: 0,
    height: '32px',
    '& fieldset': {
      borderColor: palette.secondary.light,
    },
    '& input': {
      opacity: '0',
    },
    '&:hover fieldset': {
      borderColor: palette.secondary.light,
    },
  },
  '& .MuiInputAdornment-root button': {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: '13px',
    borderRadius: 0,
    height: '32px',
    width: '100%',

    '& svg': {
      display: 'none',
    },
  },
});
