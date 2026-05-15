import "./Footer.css";

import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>La Vela 🕯️</h3>

          <p>
            Handgemachte Kerzen mit Liebe und Eleganz gefertigt.
          </p>
        </div>

        <div className="footer-section">
          <h4>Kontakt</h4>

          <p>
            <FaPhone /> +41 123 456 789
          </p>

          <p>
            <FaEnvelope /> info@lavela.ch
          </p>
        </div>

        <div className="footer-section">
          <h4>Folgen Sie uns</h4>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 La Vela - Alle Rechte vorbehalten
      </div>
    </footer>
  );
}

export default Footer;