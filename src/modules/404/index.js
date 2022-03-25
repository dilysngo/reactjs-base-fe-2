import './styles.scss';
import React from 'react';
import BackLink from 'components/BackLink';

const Page404 = () => (
  <>
    <div className="warp-page-404">
      <div className="content">
        <div>
          <div className="box-content-text">
            <div>
              <h1>
                oops..! <br /> page not found.
              </h1>
              <p>The requested URL was not found.</p>
            </div>
            <a className="go-back" href="/">
              <BackLink label="Home" />
            </a>
          </div>
          <div className="box-image-text">
            <img className="image-text" src="/images/404/text-404.png" alt="" />
          </div>
        </div>

        <img className="stripes" src="/images/404/background.png" alt="" />
      </div>
    </div>
  </>
);

export default Page404;
