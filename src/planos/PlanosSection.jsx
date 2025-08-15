import React from "react";
import "../planos/Planos.css";

const planos = [
  {
    id: 1,
    nome: "Plano Básico",
    descricao: "Acesso a aulas em video, materiais e suporte, 1 aula ao vivo por mês pelo zoom.",
    valor: "R$ 199,00",
    click2payLink: "https://click2pay.com.br/checkout?produto=basico"
  },
  {
    id: 2,
    nome: "Plano Intermediário",
    descricao: "Acesso a aulas em video + materiais + suporte personalizado.",
    valor: "R$ 299,00",
    click2payLink: "https://click2pay.com.br/checkout?produto=intermediario"
  },
  {
    id: 3,
    nome: "Plano Premium",
    descricao: "Tenha acesso a aulas em vídeo + mentorias individuais exclusivas e personalizadas, com tarefas diárias e feedback constante. Neste plano, você conta com suporte premium e contato direto com sua professora via WhatsApp, podendo falar quantas vezes quiser por dia. É acompanhamento de verdade, feito sob medida para você alcançar a fluência com segurança e rapidez.",
    valor: "R$ 499,00",
    click2payLink: "https://click2pay.com.br/checkout?produto=avancado"
  }
];

export default function PlanosSection() {
  return (
    <section id="planos" className="planos-section">
      <h2 className="planos-title">Escolha seu Plano</h2>
      <p className="planos-subtitle">
        Invista no seu inglês e alcance a fluência com o método da Carol Maria
      </p>

      <div className="planos-grid">
        {planos.map((plano) => (
          <div key={plano.id} className="plano-card">
            <h2>{plano.nome}</h2>
            <p>{plano.descricao}</p>
            <span className="plano-valor">{plano.valor}</span>
            <a
              href={plano.click2payLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-buy"
            >
              Comprar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

