import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ButtonPrimary from 'widgets/ButtonPrimary';
import ButtonSecondary from 'widgets/ButtonSecondary';
import SearchInput from 'widgets/SearchInput';

const MenuContentMobile = ({ visible, links, toggleMenu }) => {
  const location = useLocation();
  return (
    <div className="menu-mobile-container" data-visible={visible.toString()}>
      <ul className="menu-link">
        {links.map((item, index) => {
          const isHttp = item?.href?.startsWith('http');
          const Tag = isHttp ? 'a' : Link;
          const propsLink = isHttp ? { href: item.href, target: item.target } : { to: item.href };
          return (
            <li
              key={`menu-mb-${index}`}
              className={location.pathname === item.href ? 'active' : ''}
              role="presentation"
              onClick={toggleMenu}
            >
              <Tag {...propsLink} rel="noreferrer">
                {item.label}
              </Tag>
            </li>
          );
        })}
      </ul>
      <div className="search-container-mobile">
        <SearchInput />
      </div>
      <div className="menu-actions-mobile">
        <Link to="/coming-soon" onClick={toggleMenu}>
          <ButtonSecondary size="larger">Register</ButtonSecondary>
        </Link>
        <Link to="/coming-soon" onClick={toggleMenu}>
          <ButtonPrimary size="larger">Login</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};
export default MenuContentMobile;
