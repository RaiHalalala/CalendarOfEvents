import { FC } from 'react';
import styled from './empty.module.scss';

interface EmptyProps {
  children: React.ReactNode;
}

const Empty: FC<EmptyProps> = ({ children }: EmptyProps) => (
  <p className={styled.title}>{children}</p>
);

export default Empty;
