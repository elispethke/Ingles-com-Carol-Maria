import React from "react";
import "./Header.css";

export default function Header() {
    return(
<header className="header">
      <div className="container">
        {/* Título */}
        <div className="title">Carol Maria</div>
        <img className="header-img" src="/src/assets/logo2.JPG" />
       
        {/* Navegação - só aparece a partir de md */}
        <nav className="nav">
        <a href="#sobre">Sobre</a>
       <a href="#niveis">Níveis</a>
       <a href="#depoimentos">Depoimentos</a>
       <a href="#contato">Contato</a>
       </nav>


        {/* Botões */}
        <div className="buttons">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Inscreva-se</button>
        </div>
      </div>
    </header>
 

    );
}