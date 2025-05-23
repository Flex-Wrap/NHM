import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="page__footer">
      <div className="page__footer__content">
        <div className="row row--align-left row--wrap">
          {/* Naturhistorisk Museum */}
          <div className="row__item row__item--basis-15">
            <h2 className="text--bold">Naturhistorisk Museum</h2>
            <p>
              <a href="https://maps.google.com/?q=Wilhelm+Meyers+Alle+10+8000+Aarhus+C" className="link">
                Wilhelm Meyers Alle 10 8000 Aarhus C
              </a>
              <br />
              Tlf. 86 12 97 77
              <br />
              <a href="mailto:nm@nathist.dk" className="link">nm@nathist.dk</a>
              <br />
              CVR: 29073910
            </p>
          </div>

          {/* Opening Hours */}
          <div className="row__item row__item--basis-15">
            <h2 className="text--bold">Opening Hours</h2>
            <p>Monday: Closed</p>
            <p>Tuesday: 9:00 - 16:00</p>
            <p>Wednesday: 9:00 - 21:00</p>
            <p>Thursday - Sunday: 9:00 - 16:00</p>
          </div>

          {/* Newsletter Signup */}
          <div className="row__item row__item--basis-30">
            <h2 className="text--bold">Sign up for our newsletter</h2>
            <label htmlFor="newsletter-email" className="label">Email</label>
            <p className="text--small">You will need to verify your email, so use a real one</p>
            <form className="form form--inline" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                id="newsletter-email"
                className="form__input"
                placeholder="your@email.com"
                required
              />
              <button type="submit" className="button button--primary">
                Sign Up
              </button>
            </form>
          </div>

          {/* The Mols Laboratory */}
          <div className="row__item row__item--basis-15">
            <h2 className="text--bold">The Mols Laboratory</h2>
            <p>
              <a href="https://maps.google.com/?q=Strandkærvej+6,+Femmøller+8400+Ebeltoft" className="link">
                Strandkærvej 6, Femmøller 8400 Ebeltoft
              </a>
              <br />
              Tlf. 86 3625 35 / 86 12 97 77
              <br />
              <a href="mailto:molslab@molslab.dk" className="link">molslab@molslab.dk</a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="row__item row__item--basis-15">
            <div className="follow-us-section">
              <p className="follow-text">Follow Us:</p>
              <div className="follow-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="follow-btn"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="follow-btn"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="follow-btn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="follow-btn"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
  {`
    .follow-us-section {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 12px;
      margin-top: 40px;
    }

    .follow-text {
      margin: 0;
      font-weight: 500;
    }

    .follow-icons {
      display: flex;
      gap: 12px;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .follow-btn {
      background-color: rgb(0, 34, 65);
      color: white;
      width: 42px;
      height: 42px;
      padding: 12px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }

    .follow-btn:hover {
      background-color: rgb(0, 50, 100);
    }

    @media (max-width: 600px) {
      .follow-us-section {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        text-align: center;
        justify-items: center;
      }

      .follow-icons {
        justify-content: center;
      }
    }
  `}
</style>

    </footer>
    
  );
};

export default Footer;
