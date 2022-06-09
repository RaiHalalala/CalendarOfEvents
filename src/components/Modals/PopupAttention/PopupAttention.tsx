import { FC } from 'react';
import { ErrorOutline } from '@mui/icons-material';
import Buttons from '../Buttons';
import styled from './popupAttention.module.scss';

interface PopupAttentionProps {
  onClose: () => void;
  onAllow: () => void;
}

const ATTENTION = 'Вы уверены, что хотите отписаться?';

const PopupAttention: FC<PopupAttentionProps> = ({
  onClose,
  onAllow,
}: PopupAttentionProps) => (
  <div className={styled.container}>
    <div className={styled.title}>
      <ErrorOutline color="warning" />
      <p className={styled.text}>{ATTENTION}</p>
    </div>
    <Buttons onClose={onClose} onAllow={onAllow} />
  </div>
);

export default PopupAttention;
