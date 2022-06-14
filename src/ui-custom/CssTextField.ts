import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { palette } from 'styles/palette';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: palette.secondary.main,
  },
  '& label': {
    color: palette.secondary.main,
  },
  '& label.Mui-error': {
    borderColor: palette.warning.error,
  },
  '& label.Mui-error.Mui-focused': {
    color: palette.warning.error,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: palette.secondary.light,
      color: palette.secondary.light,
    },
    '&:hover fieldset': {
      borderColor: palette.secondary.light,
      color: palette.secondary.light,
    },
    '&.Mui-error:hover fieldset': {
      borderColor: palette.warning.error,
    },
    '&.Mui-focused fieldset': {
      borderColor: palette.secondary.main,
    },
    '&.Mui-focused.Mui-error fieldset': {
      borderColor: palette.warning.error,
    },
  },
});
