import React from "react";
import './CallToAction.css';

export default function CallToAction() {

    return(
      
      <section className="cta-section">
        <h2 className="cta-title"> Aprenda Inglês de Forma Eficiente!</h2>
        <p className="cta-subtitle"> Junta-se aos Alunos Que Já Alcançaram a Fluência Conosco</p>
        <button
  className="cta-button"
  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
      Clique aqui e Fale diretamente com a professora Carol Maria.
     </button>
      </section>
    );
}