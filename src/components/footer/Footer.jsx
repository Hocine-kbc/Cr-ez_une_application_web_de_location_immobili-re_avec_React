import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/images/logo_kasa_footer.svg" alt="Logo Kasa" className="footer-logo" />
      <p className="footer-text">© {new Date().getFullYear()} Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;