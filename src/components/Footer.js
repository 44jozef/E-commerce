import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h6>Follow us</h6>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h6>Use cases</h6>
        <ul>
          <li>UI design</li>
          <li>UX design</li>
          <li>Diagramming</li>
        </ul>
      </div>
      <div className="footer-section">
        <h6>Explore</h6>
        <ul>
          <li>Design</li>
          <li>Prototyping</li>
          <li>Figjam</li>
        </ul>
      </div>
      <div className="footer-section">
        <h6>Resources</h6>
        <ul>
          <li>Blog</li>
          <li>Best practices</li>
          <li>Colors</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
