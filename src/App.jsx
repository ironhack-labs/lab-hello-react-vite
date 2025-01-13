// src/App.jsx
import './App.css';

//import images from /assets
import ironhackLogo from './assets/ironhack-logo-xs.png';
import menuTop from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
  return (
    <div className="App">
       {/* Barra de navegación */}
       <nav className="nav-bar">
        <img src={ironhackLogo} alt="Ironhack Logo" />
        <img src={menuTop} alt="Menu Top" />
      </nav>
      
      {/* Sección principal (Hero) */}
      <header className="hero-section">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library,<br />
          and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </header>
      
      {/* Sección de iconos (Features) */}
      <section className="features">
        <article>
          <img src={icon1} alt="Icon 1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </article>
        
        <article>
          <img src={icon2} alt="Icon 2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </article>
        
        <article>
          <img src={icon3} alt="Icon 3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </article>
        
        <article>
          <img src={icon4} alt="Icon 4" />
          <h3>JSX</h3>
          <p>Statically typed, designed to run on modern browsers.</p>
        </article>
      </section>
    </div>
  );
}

export default App;