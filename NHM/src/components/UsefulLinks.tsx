import React from "react";
import "./UsefulLinks.css";
import IconArrow from "../assets/icon-arrow.svg?react";
import { getUsefulLinks } from "../firebaseStub";

interface UsefulLinksProps {
  className?: string;
}

export const UsefulLinks: React.FC<UsefulLinksProps> = ({ className }) => {
  const links = getUsefulLinks();

  return (
    <div className={`${className ?? ""}`}>
      <h2>Useful links</h2>
      <ul className="useful-links-list">
        {links.map((link) => (
          <li key={link.id} className="useful-links-item">
            <span>{link.label}</span>
            <IconArrow className="arrow-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};
