import React from "react";
import cameraIcon from "../../assets/camera.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socialImages = [
  {
    alt: "Facebook",
    src: "https://images.unsplash.com/photo-1572713629470-3e9f5d4fdf4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhJTIwbGlmZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    alt: "Instagram",
    src: "https://images.unsplash.com/photo-1511372733300-ddadd1faa116?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    alt: "Tripadvisor",
    src: "https://plus.unsplash.com/premium_photo-1739452119298-af5032608eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZSUyMG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    alt: "YouTube",
    src: "https://plus.unsplash.com/premium_photo-1661963425543-b738d0c3425c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWFyaHVzJTIwbmF0dXJlfGVufDB8fDB8fHww"
  }
];

const SocialMedia: React.FC = () => (
  <div className="page__content__block">
    <h2 className="header__content__title" style={{ marginBottom: 32 }}>
      Social Media
    </h2>

    <div className="social-media-grid-au">
      {socialImages.map((img, idx) => (
        <div className="social-media-grid-item" key={idx}>
          <img className="social-img" src={img.src} alt={img.alt} />
          <img src={cameraIcon} alt="camera icon" className="camera-icon" />
        </div>
      ))}
    </div>

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

    <style>
      {`
        .social-media-grid-au {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }

        .social-media-grid-item {
          position: relative;
          aspect-ratio: 1 / 1;
          width: 100%;
          margin: 0 auto;
        }

        .social-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .camera-icon {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 28px;
          height: 28px;
          z-index: 2;
          filter: invert(1) brightness(2);
        }

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
          .social-media-grid-au {
          }

          .camera-icon {
            width: 24px;
            height: 24px;
          }

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
  </div>
);

export default SocialMedia;
