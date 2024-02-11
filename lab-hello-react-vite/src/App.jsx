import './App.css'
import logo from "./assets/ironhack-logo-xs.png"
import menuicon from ".//assets/menu-top-xs.png"
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"

function App() {

  return (
    <div className="App">

      <section className="hero">

        <div className="navbar">
          <img src={logo} alt="Ironhack logo" />
          <img src={menuicon} alt="menu icon" className='menu-icon' />
        </div>
        <div className="title">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        </div>

        <h2>Awesome!</h2>

      </section>

      <section className="articles">

        <article>
          <img src={icon1} alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </article>

        <article>
          <img src={icon2} alt="" />
          <h3>Components</h3>
          <p>Build encapsulated Components that manage their state.</p>
        </article>

        <article>
          <img src={icon3} alt="" />
          <h3>Single-Way</h3>
          <p>A set of inmutable values are passed to the components´s.</p>
        </article>

        <article>
          <img src={icon4} alt="" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </article>

      </section>

    </div>
  )
}

export default App
