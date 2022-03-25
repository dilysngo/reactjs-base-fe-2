import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';
import InputWithButton from 'widgets/InputWithButton';

const config = [
  {
    id: 1,
    label: 'Telegram',
    link_to: '/coming-soon',
    target: '',
    img_url: '/images/socials/telegram.svg',
  },
  {
    id: 1,
    label: 'Twitter',
    link_to: '/coming-soon',
    target: '',
    img_url: '/images/socials/twitter.svg',
  },
  {
    id: 1,
    label: 'Facebook',
    link_to: '/coming-soon',
    target: '',
    img_url: '/images/socials/facebook.svg',
  },
  {
    id: 1,
    label: 'Youtube',
    link_to: '/coming-soon',
    target: '',
    img_url: '/images/socials/youtube.svg',
  },
];

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <Row gutter={[20, 40]}>
        <Col xs={24} sm={24} lg={24} xl={8}>
          <Link to="/">
            <div className="footer-logo">
              <img src="/images/logo.png" title="MMRocket" alt="MMRocket" />
              <span>Reactjs</span>
            </div>
          </Link>
          <p className="footer-des">Your description</p>
          <div className="socials-list">
            {config.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <a key={item?.link_to + index} href={item?.link_to} target={item?.target} rel="noreferrer">
                <img src={item?.img_url} alt={item?.label} width={`${item?.width || '40px'}`} title={item?.label} />
              </a>
            ))}
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={4}>
          <div className="quick-links">
            <div className="footer-title">Quick Links.</div>
            <ul>
              <li>
                <a href="/coming-soon" target="_blank" rel="noreferrer" className="footer-sub-title">
                  Documents
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noreferrer" className="footer-sub-title">
                  Blog
                </a>
              </li>
              <li>
                <a href="/coming-soon" target="_blank" rel="noreferrer" className="footer-sub-title">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={3}>
          <div className="quick-links">
            <div className="footer-title" style={{ opacity: 0 }}>
              Quick Links.
            </div>
            <ul>
              <li>
                <a href="/coming-soon" rel="noreferrer" className="footer-sub-title">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/coming-soon" rel="noreferrer" className="footer-sub-title">
                  Feature
                </a>
              </li>
              <li>
                <a href="/coming-soon" rel="noreferrer" className="footer-sub-title">
                  Market
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={12} xl={9}>
          <div className="footer-actions">
            <div className="footer-title">Submit for updates.</div>
            <p className="footer-actions-des">Subscribe to get update and notify our exchange and products</p>
            <InputWithButton button="Send" />
          </div>
        </Col>
      </Row>
      <div className="footer-bottom">
        <p>MM Rocket ©. All rights reserved.</p>
        <div className="footer-bottom-right">
          <a href="/coming-soon" target="_blank" rel="noreferrer">
            Term of Service
          </a>
          <span className="hr-hor" />
          <a href="/coming-soon" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
