
import './App.css'

function App() {

  return (
    <div className='App'>
      <div>
        <nav className='d-flex align-items-center justify-content-between'>
          <img src="src/assets/images/ironhack-logo-xs.png" alt="IronHack Logo" />
          <img src="src/assets/images/menu-top-xs.png" alt="Menu" />
        </nav>
        <h1 className='fw-bold mt-5 me-5 ms-5'>Say hello to <br /> ReactJS</h1>
        <p className='fw-light mb-5 me-5 ms-5'>
          You will learn how to use <br />
          the most popular frontend library, <br />
          and become a super Ninja developer.
        </p>
        <button className='btn bg-light ms-5 text-black' type='button'>Awesome!</button>
      </div>
      <div className='d-flex align-items-center justify-content-around p-5 mt-5'>
        <div className='d-flex flex-column align-items-center'>
          <img src="src/assets/images/icon1.png" alt="Icon1" />
          <p className='text-center'>
            <strong className='fs-4'>Declarative</strong> <br />
            React makes it <br />
            painless to create <br />
            interactive UIs.
          </p>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <img src="src/assets/images/icon2.png" alt="Icon2" />
          <p className='text-center'>
            <strong className='fs-4'>Components</strong> <br />
            Build encapsulated<br />
            components that <br />
            manage their state.
          </p>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <img src="src/assets/images/icon3.png" alt="Icon3" />
          <p className='text-center'>
            <strong className='fs-4'>Single-Way</strong> <br />
            A set of immutable<br />
            values are passed to<br />
            the components.
          </p>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <img src="src/assets/images/icon4.png" alt="Icon4" />
          <p className='text-center'>
            <strong className='fs-4'>JSX</strong> <br />
            Statically-typed,<br />
            designed to run on <br />
            modern browsers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
