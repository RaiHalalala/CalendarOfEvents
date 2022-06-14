import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clearNumbers } from 'utils/helper';
import { LinkType } from 'data/links';
import styled from './navLink.module.scss';

const NavLink: FC<LinkType> = ({ to, icon, name }: LinkType) => {
  const location = useLocation();
  const setColor = (to: string): 'primary' | '' =>
    clearNumbers(location.pathname) === to ? 'primary' : '';
  return (
    <Link to={to} className={`${styled.link} ${styled[setColor(to)]}`}>
      <img
        {...icon}
        className={`${styled.icon} ${styled[`${setColor(to)}Icon`]}`}
      />
      {name}
    </Link>
  );
};

export default NavLink;
