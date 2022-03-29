import './styles.scss';
import React from 'react';
import InputWithButton from 'widgets/InputWithButton';

const ComingSoon = () => (
  <div className="coming-soon-container">
    <div className="content">
      <div>
        <p>Something Is</p>
        <div className="soon">COMING SOON</div>
        <p>We will be celebrating the launch of our new site very soon!</p>
      </div>

      <div>
        <InputWithButton placeholder="Enter your email address" button={window.innerWidth >= 991 ? 'Notice me' : 'send'} />
      </div>
    </div>
  </div>
);

export default ComingSoon;
