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
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: palette.secondary.light,
      color: palette.secondary.light,
    },
    '&:hover fieldset': {
      borderColor: palette.secondary.light,
      color: palette.secondary.light,
    },
    '&.Mui-focused fieldset': {
      borderColor: palette.secondary.main,
    },
  },
});
