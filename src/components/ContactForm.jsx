import React from "react";
import './ContactFom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function ContactFom(){

   return (
  <section className="contact-section">
    <form className="contact-form">
      <h3 className="contact-title">Deixe seus dados e entraremos em contato com vôce</h3>
      <input type="text" placeholder="Seu Nome" className="form-input" />
      <input type="email" placeholder="Seu Email" className="form-input" />
      <input type="tel" placeholder="Seu WhatsApp" className="form-input" />
      <select className="form-input">
        <option>Iniciante</option>
        <option>Intermediário</option>
        <option>Avançado</option>
      </select>
      <textarea
        placeholder="Conte-nos seus objetivos com o inglês..."
        className="form-textarea"
        rows="3"
      ></textarea>
      <button type="submit" className="form-button">
        Enviar Mensagem
      </button>
    </form>
  </section>
);
}