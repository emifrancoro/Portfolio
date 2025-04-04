import React from 'react';
import './App.css';
import chuba from './chuba.jpeg'; // Importar la imagen local

export default function App() {
  return (
    <div className="container">
      <div className="card-layout">
        <div className="card">
          <h1 className="glow-text">Emiliano Franco Orozco</h1>
          <p className="subtitle">Estudiante de <span className="highlight">Ingeniería en Cibernética</span></p>
          <p className="semester">4° semestre</p>
          <p>Me dicen <span className="nickname">Krakiño</span></p>
          <p>De <span className="location">Tepatitlán</span></p>
          <button onClick={() => alert('La Tepaclika te saluda. PD: Todavía no tengo experiencia gracias')} className="button">
            Saludar
          </button>
        </div>
        <div className="image-container">
          <img src={chuba} alt="Perfil" className="profile-img" />
        </div>
      </div>
    </div>
  );
}
