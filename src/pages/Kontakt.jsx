import "./Kontakt.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Kontakt() {
  return (
    <div className="kontakt-container">
      <div className="kontakt-image">
        <img
          src="https://images.unsplash.com/photo-1603006905003-be475563bc59"
          alt="Kerzen"
        />
      </div>

      <div className="kontakt-content">
        <h1>Kontakt</h1>

        <p>
          Willkommen bei La Vela. Kontaktieren Sie uns für Fragen oder
          Sonderanfertigungen.
        </p>

        <div className="kontakt-info">
          <p>
            <FaPhone /> +41 123 456 789
          </p>

          <p>
            <FaEnvelope /> info@lavela.ch
          </p>

          <p>
            <FaMapMarkerAlt /> Zürich, Schweiz
          </p>
        </div>

        <form className="kontakt-form">
          <input type="text" placeholder="Ihr Name" />

          <input type="email" placeholder="Ihre Email" />

          <textarea
            rows="5"
            placeholder="Ihre Nachricht"
          ></textarea>

          <button type="submit">Nachricht senden</button>
        </form>
      </div>
    </div>
  );
}

export default Kontakt;