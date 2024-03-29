import './App.css';
import logo from './assets/ironhack-logo-xs.png';
import menu from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";


function App() {
  return (
    <div className='App'>
      <div className='Main'>
        <nav className='Nav'>
          <div>
          <img src={logo} alt='ironhack-logo' className='w-12 h-12' />
          </div>
          <div className='menu'>
          <img src={menu} className="toggle" alt="menu" />        
          </div>
        </nav>
        <br>
        </br>
        <div className='text'>
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
      </div>
      <br>
      </br>
      <div className='Footer-main'>
        <div>
          <img src= {icon1} />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive Uls.</p>
        </div>

        <div>
          <img src= {icon2} />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
          <img src= {icon3} />
          <h3>Single-Way</h3>
          <p>A set immutable values are passed to the component's.</p>
        </div>

        <div>
          <img src= {icon4} />
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>

      </div>




    </div>
  );
}

export default App;

