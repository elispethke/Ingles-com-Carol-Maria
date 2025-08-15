import React from "react";
import "./Hero.css";

export default function Hero() {
  const handleButtonClick = () => {
    const planosSection = document.getElementById("planos");
    planosSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Sobre Mim!</h1>
          <p>
            I’m Carol Maria. Desde 2018, ensino inglês de forma prática e eficaz, 
            ajudando adultos a conquistarem fluência real. Desenvolvi meu próprio método 
            focado na comunicação que você realmente usa no dia a dia, no trabalho, 
            viagens, reuniões ou até assistindo séries sem legenda.

            Meu objetivo é transformar o aprendizado em algo eficiente, motivador e direto ao ponto, 
            tirando você do básico e conduzindo à fluência funcional com confiança. 
            Com técnicas modernas, exercícios direcionados e acompanhamento personalizado, 
            cada aluno evolui de forma consistente, entendendo não só a língua, mas também o contexto cultural.

            Aqui, o inglês deixa de ser um desafio e se torna uma ferramenta poderosa 
            para abrir portas, expandir oportunidades e se comunicar com naturalidade em qualquer situação.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleButtonClick}>
              Matricula-se
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/src/assets/carol.png" alt="Carol Maria" />
        </div>
      </div>
    </section>
  );
}
