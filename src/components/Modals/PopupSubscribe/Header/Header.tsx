import { FC } from 'react';
import { Close } from '@mui/icons-material';
import styled from './header.module.scss';

interface HeaderProps {
  onClose: () => void;
}

const TITLE = 'Записаться на событие';

const Header: FC<HeaderProps> = ({ onClose }: HeaderProps) => (
  <div className={styled.wrapper}>
    <p className={styled.title}>{TITLE}</p>
    <button type="button" className={styled.close} onClick={onClose}>
      <Close color="disabled" />
    </button>
  </div>
);

export default Header;
