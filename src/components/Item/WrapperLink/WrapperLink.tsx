import React, { FC } from 'react';
import { useScreen } from 'hooks/useScreen';
import { Link } from 'react-router-dom';
import styled from './wrapperLink.module.scss';

interface WrapperLinkProps {
  children: React.ReactNode;
  notLink?: boolean;
  to: string;
}

//wrapper mb link or block
const WrapperLink: FC<WrapperLinkProps> = ({
  children,
  notLink,
  to,
}: WrapperLinkProps) => {
  const { isMobile } = useScreen();
  if (isMobile && !notLink) {
    return (
      <Link to={to} className={styled.wrapper}>
        {children}
      </Link>
    );
  }
  return <span className={styled.wrapper}>{children}</span>;
};

export default WrapperLink;
