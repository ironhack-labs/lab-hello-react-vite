import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import listIcon from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <main>
        <nav>
          <img src={ironhackLogo} />
          <img src={listIcon} />
        </nav>
        <section className="content">
          <div>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </p>
            <button>Awesome!</button>
          </div>
        </section>
      </main>

      <section className="icon-bar">
        <div className="icon">
          <img src={icon1} />
          <h4>Declarative</h4>
          <p>React makes it painless to create Interactive UIs.</p>
        </div>

        <div className="icon">
          <img src={icon2} />
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="icon">
          <img src={icon3} />
          <h4>Single-Way</h4>
          <p>A set of immaculate values are passed to the component's.</p>
        </div>

        <div className="icon">
          <img src={icon4} />
          <h4>JSX</h4>
          <p>Statically-typed, designed to run on modern browsers. </p>
        </div>
      </section>
    </div>
  );
}

export default App;
