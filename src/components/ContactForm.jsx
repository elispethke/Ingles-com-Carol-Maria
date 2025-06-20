import React from "react";
import './ContactFom.css';
export default function ContactFom(){

    return(
<section className="contact-section">
     <div className="contact-info">
        <h3 className="contact-title"></h3>
        <u className="contact-list">
            <li><strong>WhatApp: </strong> +351 961841668 </li>
            <li><strong>E-mail: </strong> caroline.cunha91@gmail.com </li> 
        </u>
     </div>

<form className="contact-form">
<h3 className="contact-title"> Agende Sua Aula Experimental</h3>
<input type="text" placeholder="Seu Nome" className="form-input" />
<input type="email" placeholder="Seu Email" className="form-input" />
 <input type="tel" placeholder="Seu WhatApp" className="form-input" />
 <select className="form-input">
<option>Iniciante</option>
<option>Intermediário</option>
 <option>Avançado</option>
     </select>
 <textarea placeholder="Conte-nos seus objetivos com o inglês..." className="form-textarea" rows="3"></textarea>
  <button type="submit" className="form-button">
          Agendar Aula Experimental Grátis
 </button>
</form>

    </section>
    );
}