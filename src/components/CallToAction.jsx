import React from "react";
import './CallToAction.css';

export default function CallToAction() {

    return(
      
      <section className="cta-section">
        <h2 className="cta-title"> Aprenda Inglê de Forma Eficiente!</h2>
        <p className="cta-subtitle"> Junta-se a Milhares De Alunos Que Já Alcançaram a Fluência Conosco</p>
        <button
  className="cta-button"
  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
      Agende uma Aula Experimental Gratis
     </button>
      </section>
    );
}