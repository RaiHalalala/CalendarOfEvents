import { links } from 'data/links';
import NavLink from './NavLink';
import styled from './header.module.scss';

const Header = () => (
  <header className={styled.header}>
    <div className={styled.content}>
      {links.map((params, index) => (
        <NavLink key={index} {...params} />
      ))}
    </div>
  </header>
);

export default Header;
