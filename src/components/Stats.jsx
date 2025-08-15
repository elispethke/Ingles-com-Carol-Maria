import React from "react";
import "./Stats.css";
export default function Stats(){

    return(
<section className="stats-section">
  <div className="stat-item">
    <h3 className="stat-value">2k</h3>
    <p className="stat-label">Alunos Ativos</p>
  </div>
  <div className="stat-item">
    <h3 className="stat-value">4.9</h3>
    <p className="stat-label">Avaliação</p>
  </div>
  <div className="stat-item">
    <h3 className="stat-value">95%</h3>
    <p className="stat-label">Taxa de Sucesso</p>
  </div>
     
    </section>
    );
}