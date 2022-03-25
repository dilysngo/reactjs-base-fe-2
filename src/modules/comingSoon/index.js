import './styles.scss';
import React from 'react';
import InputWithButton from 'widgets/InputWithButton';

const ComingSoon = () => (
  <div className="warp-page-coming-soon">
    <div className="content">
      <div>
        <div>
          <p>Something Is</p>
          <img className="image-text-coming-soon" src="/images/comingsoon/coming.png" alt="" />
          <p>We will be celebrating the launch of our new site very soon!</p>
        </div>

        <div>
          <InputWithButton placeholder="Enter your email address" button={window.innerWidth >= 991 ? 'Notice me' : 'send'} />
        </div>

        <img className="stripes" src="/images/404/background.png" alt="" />
      </div>
    </div>
  </div>
);

export default ComingSoon;
