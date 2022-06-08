import { FC } from 'react';
import Header from 'components/Header';
import styled from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <main className={styled.wrapper}>
      <Header />
      <section className={styled.section}>{children}</section>
    </main>
  );
};

export default Layout;
