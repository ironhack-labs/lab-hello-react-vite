import './App.css'
import ironLogo from './assets/ironhack-logo-xs.png'
import menuIcon from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

function App() {

  return (
    <div className="App">
      <div className = 'main'>
        <nav className = 'navbar'>
            <img className = 'iron-icon' src={ironLogo} alt="" />
            <img className = 'menu-icon' src={menuIcon} alt="" />
        </nav>
      <section className = 'main-body' >
        <h1>
          Say hello to <br/>
           ReactJS
        </h1>
        <h3>
          You will learn how to use<br/>
           the most popular frontend library,<br/>
          and become a super ninja developer.
        </h3>
        <a className = 'awesome-button' href="">Awesome!</a>
        
      </section>

      </div>
      
      <section className = 'secondary-body'>

        <div>
          <img src={icon1} alt="" />
          <span>Declarative</span>
          <p>React makes it<br/>
            painless to create<br/>
            interactive UIs.</p>
        </div>

        <div>
          <img src={icon2} alt="" />
          <span>Components</span>
          <p>Build encapsulated<br/>
           components that<br/>
            manage their state.</p>
        </div>

        <div>
          <img src={icon3} alt="" />
          <span>Single-Way</span>
          <p>A set of inmutable<br/>
           values are passed to<br/>
            the component's.</p>
        </div>

         <div>
          <img src={icon4} alt="" />
          <span>JSX</span>
          <p>Statically-typed,<br/>
           designed to run on<br/>
            modern browsers.</p>
        </div>
       
      </section>
    </div>
  )
}

export default App
