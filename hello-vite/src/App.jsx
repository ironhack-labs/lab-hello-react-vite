import "./App.css";
import logo from "./assets/ironhack-logo-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import menu from "./assets/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <main>
        <nav>
          <img src={logo} alt="logo" className="ironhack-logo" />
          <img src={menu} className="toggle" alt="menu" />
        </nav>

        <section className="main-section">
          <div>
            <h1>
              Say hello to
              <br />
              ReactJS
            </h1>
            <p>
              You will learn how to use the most popular frontend library,and
              become a super Ninja developer.
            </p>
            <button>Awesome!</button>
          </div>
        </section>
      </main>

      <section className="footer-section">
        <div>
          <img src={icon1} alt="illustration" />
          <h4>Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div>
          <img src={icon2} alt="illustration" />
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
          <img src={icon3} alt="illustration" />
          <h4>Single-Way</h4>
          <p>A set of immutable values are passed to the components.</p>
        </div>

        <div>
          <img src={icon4} alt="illustration" />
          <h4>JSX</h4>
          <p>Statically-typed, design to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

// Export the component using the ES6 export syntax
export default App;
