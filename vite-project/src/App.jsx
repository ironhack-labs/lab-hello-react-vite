// src/App.jsx
import "./App.css";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuTop from "./assets/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <img src={ironhackLogo} alt="logo" />
      <img src={menuTop} alt="menu" />
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
      <button>Awesome!</button>
      <div>
        <div>
          <img src={icon1} alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="icon2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="icon3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={icon4} alt="icon3" />
          <h2>JSX</h2>
          <p>Statically-tiped, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
