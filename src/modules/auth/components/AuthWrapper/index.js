import React from 'react';
import './styles.scss';

const AuthWrapper = ({ children }) => (
  <div className="auth-container">
    <div className="auth-content">
      <span className="wave-1">
        <img src="/images/icons/wave-1.png" alt="" />
      </span>
      {children}
      <span className="wave-2">
        <img src="/images/icons/wave-2.png" alt="" />
      </span>
    </div>
  </div>
);

export default AuthWrapper;
