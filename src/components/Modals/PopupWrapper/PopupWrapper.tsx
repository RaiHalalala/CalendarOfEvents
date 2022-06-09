import { FC } from 'react';
import { createPortal } from 'react-dom';
import styled from './popupWrapper.module.scss';

interface PopupWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
}

//popup from react portal
const PopupWrapper: FC<PopupWrapperProps> = ({
  children,
  isOpen,
}: PopupWrapperProps) => {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className={styled.wrapper}>{children}</div>,
    document.body,
  );
};

export default PopupWrapper;
