import React from "react";
import "./Hero.css";

export default function Hero(){
    return(
<section className="hero-section">
  <div className="hero-content">
    <h1>Sobre Mim!</h1>
    <p>I’m Carol Maria.
     Sou professora de inglês desde 2018 e, ao longo dessa jornada, percebi que o que realmente desbloqueia o inglês na vida adulta não são regras gramaticais soltas, mas sim a prática constante e direcionada. Por isso, desenvolvi meu próprio método, com foco total em comunicação real, aquela que você usa no trabalho, em viagens, reuniões ou até pra maratonar uma série sem legenda.
     Meu objetivo é te tirar do básico eterno e te levar à fluência funcional, com segurança para falar, entender e viver o inglês no seu dia a dia.</p>
<div className="hero-buttons">
<button className="btn-primary">Comece Agora</button>
<button className="btn-secondary">Ver Demo</button>
</div>
  </div>
  <div className="hero-image">
    <img src="/src/assets/logo1.JPG"/>
  </div>
  
</section>
    );
}