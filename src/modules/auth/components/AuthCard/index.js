import React from 'react';
import './styles.scss';

const AuthCard = ({ children, className, ...props }) => (
  <div className={`auth-card ${className}`} {...props}>
    {children}
  </div>
);

export default AuthCard;
