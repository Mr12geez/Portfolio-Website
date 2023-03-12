
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
    
    <footer id="footer">
  <div class="container-fluid">
      <!-- social media icons -->
      <div class="social-icons mt-4">
          <a href="https://www.github.com/mr12geez" target="_blank"><i class="fab fa-github"></i></a>
          <a href="https://www.facebook.com/12geez" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/mr12geez" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.twitter.com/mr12geez" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/chijioke-obiorah-8a725b20b/" target="_blank"><i class="fab fa-linkedin"></i></a>
      </div>
    
      <p>Copyright © {currentYear} CHIJIOKE OBIORAH</p>
    </footer>
  );
}

export default Footer;
