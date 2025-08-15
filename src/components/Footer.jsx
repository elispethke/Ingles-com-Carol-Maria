import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Contato principal */}
      <div className="footer-container">
        <h2 className="contact-title">Contato</h2>
        <ul className="contact-list">
          <li>
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            <a
              href="https://wa.me/351961841668"
              target="_blank"
              rel="noopener noreferrer"
            >
              +351 961 841 668
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <a href="mailto:caroline.cunha91@gmail.com">
              carolina.cunha91@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        <p className="footer-copy-title">
          © {new Date().getFullYear()} Todos os direitos reservados{" "}
          <strong>Inglês Com Carol Maria</strong>.
        </p>
      </div>
    </footer>
  );
}
