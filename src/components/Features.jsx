import React from "react";
import metodologia from '../assets/Icons/metodologia.png';
import professoresIcon from '../assets/Icons/professores.png';
import foco from '../assets/Icons/foco.png';
import trofel from '../assets/Icons/trofeu.png';
import './Features.css';


const features = [
  {
    title: 'Metodologia Exclusiva',
    text: 'Desenvolvida por especialistas com mais de 7 anos de experiência.',
    icon: metodologia,
  },
  {
    title: 'Professores Capacitados',
    text: 'Aprenda com nativos certificados que conhecem a cultura e nuances.',
    icon: professoresIcon,
  },
  {
    title: 'Foco na Conversação',
    text: '80% das aulas são voltadas para prática oral e fluência.',
    icon: foco,
  },
  {
    title: 'Fluência em poucos Meses',
    text: 'Voce tem acesso aos professores todos os dias, por audios via WhatApp e Texto para Praticar seu Inglês diariamente.',
    icon: trofel,
  },
]
  
export default function Features(){

    return(
<section className="features-section">
  <h2 className="features-title">Por que Escolher o Inglês Carol Maria?</h2>
  <p className="feature-subtitle">Mais Do Que Um Curso De Inglês, Somo Uma Ponte Para O Mundo!</p>
   <div className="feature-grid">
   {features.map(({ title, text, icon }, i) => (
          <div key={i} className="feature-box">
            <img src={icon} alt={title} className="feature-icon" />
            <h3 className="feature-title">{title}</h3>
            <p className="feature-text">{text}</p>
          </div>
        ))}
    </div>  
    </section>
    );
}