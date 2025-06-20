import React from "react";
import "./Stats.css";
export default function Stats(){

    return(
<section className="stats-section">
  <div className="stat-item">
    <p className="stat-value">50k</p>
    <p className="stat-label">Alunos Ativos</p>
  </div>
  <div className="stat-item">
    <p className="stat-value">4.9</p>
    <p className="stat-label">Avaliação</p>
  </div>
  <div className="stat-item">
    <p className="stat-value">95%</p>
    <p className="stat-label">Taxa de Sucesso</p>
  </div>
     
    </section>
    );
}