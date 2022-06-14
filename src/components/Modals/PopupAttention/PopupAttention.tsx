import { FC } from 'react';
import { ErrorOutline } from '@mui/icons-material';
import Buttons from '../Buttons';
import styled from './popupAttention.module.scss';

interface PopupAttentionProps {
  onClose: () => void;
  onAllow: () => void;
}

const ATTENTION = 'Вы уверены, что хотите отказаться?';

const PopupAttention: FC<PopupAttentionProps> = ({
  onClose,
  onAllow,
}: PopupAttentionProps) => (
  <div className={styled.wrapper}>
    <div className={styled.container}>
      <ErrorOutline style={{ color: '#FAAD14', fontSize: '24px' }} />
      <p className={styled.title}>{ATTENTION}</p>
    </div>
    <Buttons onClose={onClose} onAllow={onAllow} />
  </div>
);

export default PopupAttention;
