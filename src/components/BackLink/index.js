import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import { BackIcon } from 'widgets/Svg';

const BackLink = ({ icon, label, ...props }) => {
  const history = useHistory();
  return (
    <div
      className="back-link"
      onClick={() => {
        const pathList = history.location.pathname.split('/');
        const newLink = pathList[pathList.length - 2];
        history.push(newLink ? `/${newLink}` : '/');
      }}
      role="presentation"
      {...props}
    >
      {icon || <BackIcon />}
      <div className="back-title">{label}</div>
    </div>
  );
};

export default BackLink;
