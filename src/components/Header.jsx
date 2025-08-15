// Header.tsx
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
      <img className="header-img" src="/src/assets/font-logo.png" alt="Logo" />
      </div>
      <div className="header-left">
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </div>
      <div className="buttons">
        <button className="btn-login">Login</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </header>
  );
}