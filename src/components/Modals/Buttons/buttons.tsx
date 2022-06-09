import { FC } from 'react';
import { Button, Box } from '@mui/material';
import styled from './buttons.module.scss';

interface ButtonsProps {
  onClose: () => void;
  onAllow?: () => void;
}

const BUTTON = {
  ALLOW: 'ОК',
  CANCEL: 'Отмена',
};

const Buttons: FC<ButtonsProps> = ({ onClose, onAllow }: ButtonsProps) => (
  <div className={styled.wrapper}>
    <Box className={styled.button}>
      <Button type="button" variant="outlined" onClick={onClose}>
        {BUTTON.CANCEL}
      </Button>
    </Box>
    <Box className={styled.button}>
      <Button
        type="submit"
        variant="contained"
        onClick={() => onAllow && onAllow()}>
        {BUTTON.ALLOW}
      </Button>
    </Box>
  </div>
);

export default Buttons;
