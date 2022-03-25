import React from 'react';
import { Link } from 'react-router-dom';

const Ring = ({ link }) => (
  <div className="ring-wrapper">
    <span>
      <Link to={link}>
        <img src="/images/icons/ring.png" width={20} alt="" />
      </Link>
    </span>
  </div>
);

export default Ring;
