import { FC } from 'react';
import { Button, Box } from '@mui/material';
import styled from './subscribeButton.module.scss';

interface SubscribeButtonProps {
  isSubscribe: boolean;
  onClick: () => void;
}

const BUTTON_TITLE = {
  SING_UP: 'Записаться',
  EXIT: 'Отписаться',
};

const SubscribeButton: FC<SubscribeButtonProps> = ({
  isSubscribe,
  onClick,
}: SubscribeButtonProps) => (
  <Box textAlign="end" className={styled.button}>
    <Button
      onClick={onClick}
      variant="contained"
      color={!isSubscribe ? 'primary' : 'error'}>
      {!isSubscribe && (
        <img className={styled.arrow} src="/static/arrow.png" alt="arrow" />
      )}
      {!isSubscribe ? BUTTON_TITLE.SING_UP : BUTTON_TITLE.EXIT}
    </Button>
  </Box>
);

export default SubscribeButton;
