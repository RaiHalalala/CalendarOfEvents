import { links } from 'data/links';
import NavLink from './NavLink';
import styled from './header.module.scss';

const Header = () => (
  <header className={styled.header}>
    {links.map((params, index) => (
      <NavLink key={index} {...params} />
    ))}
  </header>
);

export default Header;
