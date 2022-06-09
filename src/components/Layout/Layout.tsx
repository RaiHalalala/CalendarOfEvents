import { FC } from 'react';
import Header from 'components/Header';
import styled from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => (
  <main className={styled.wrapper}>
    <Header />
    {children}
    <footer className={styled.footer} />
  </main>
);

export default Layout;
