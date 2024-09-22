import './App.css'
import ironhackLogo from "./assets/ironhack-logo-xs.png"
import menuIcon from "./assets/menu-top-xs.png"
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"

function App() {
  return (
    <div className='App'>
      <div className='container-top'>
        <nav>
          <img src={ironhackLogo} alt="Ironhack Logo" />
          <img src={menuIcon} alt="Menu Icon" />
        </nav>
        
        <h1>Say hello to<br/>ReactJS</h1>
        <p>You will learn how to use<br/>the most popular frontend library,<br/> and become a super Ninja developer.</p>
        <button><h3>Awesome!</h3></button>
      </div>

      <div className='container-bottom'>
        <div className='icon'>
          <img src={icon1} alt="Declarative" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs,</p>
        </div>

        <div className='icon'>
          <img src={icon2} alt="Components" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className='icon'>
          <img src={icon3} alt="Single-Way" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component´s.</p>
        </div>
          
        <div className='icon'>
          <img src={icon4} alt="JSX" />
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  )
}

export default App
