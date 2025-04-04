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

      <div className="info-sections">
        <section className="about-me">
          <h2>Sobre mí</h2>
          <p>Hola, soy Emiliano Franco, un joven foráneo estudiando en Guadalajara. Aparte de mis estudios, vendo gomitas y estoy desarrollando mis habilidades en el mundo de la programación.</p>
        </section>

        <section className="experience">
          <h2>Experiencia</h2>
          <p>Trabajé como estibador en Tepaprime, lo que me permitió aprender sobre logística y manejo de productos en un entorno dinámico.</p>
        </section>

        <section className="projects">
          <h2>Proyectos</h2>
          <ul>
            <li>Pathfinder: Creación de un juego de mesa interactivo.</li>
            <li>Intentos de páginas web: He experimentado con la creación de sitios web.</li>
            <li>Actualmente trabajando en el desarrollo de aplicaciones.</li>
            <li>Aprendizaje en GitHub: Empecé a utilizar GitHub para gestionar proyectos de desarrollo.</li>
            <li>Mi queridísima estructura de datos: Me apasiona el estudio y trabajo con estructuras de datos.</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contacto</h2>
          <p>Puedes contactarme a través del siguiente correo electrónico: <a href="mailto:emifranco1906@gmail.com">emifranco1906@gmail.com</a></p>
        </section>
      </div>
    </div>
  );
}
