import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LinkType } from 'data/links';
import styled from './navLink.module.scss';

const NavLink: FC<LinkType> = ({ to, setIcon, name }: LinkType) => {
  const location = useLocation();
  const setColor = (to: string): 'primary' | 'inherit' =>
    location.pathname === to ? 'primary' : 'inherit';

  return (
    <Link to={to} className={`${styled.link} ${styled[setColor(to)]}`}>
      {setIcon(setColor(to), styled.icon)}
      {name}
    </Link>
  );
};

export default NavLink;
