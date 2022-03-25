import './styles.scss';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Banner = ({ showLink }) => {
  const location = useLocation();
  const [pathList, setPathList] = useState([]);

  useEffect(() => {
    setPathList(location.pathname.split('/'));
  }, [location.pathname, showLink]);

  return (
    <div className="deposit-banner">
      <img className="background-1" src="/images/deposit/banner.png" alt="" />
      <div className="deposit-body">
        <h2>{[...pathList].pop()}</h2>
        {showLink && (
          <ul>
            {pathList.map((item, index) => {
              const link = pathList.slice(0, index + 1).join('/');
              return (
                <li key={`banner-${item}`}>
                  <Link to={`${link}`}>{item || 'Home'}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default React.memo(Banner);
