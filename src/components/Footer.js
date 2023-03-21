
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
    <footer>
      <p>Copyright © {currentYear} CHIJIOKE OBIORAH</p>
    </footer>
    </div>
  );
}

export default Footer;
