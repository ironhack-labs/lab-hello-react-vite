import './App.css'
import logo from "./assets/logo.png"
import menu from "./assets/menu.png"
import code from "./assets/codescreen.png"
import gear from "./assets/gearscreen.png"
import home from "./assets/homescreen.png"
import setting from "./assets/settings.png"


function App() {


  return (
    <div>
      <div id='intro-billboard' className='text-white bg-neutral-800 flex flex-col justify-items-start text-left'>
        <nav className='flex justify-between mx-16 my-4'>
          <img src={ logo } alt="ironhack-logo" className='w-12 h-12'/>
          <img src={ menu } alt="hamburger-menu" className='w-12 h-12'/>
        </nav>
        <h1 className='text-white text-7xl ml-16 w-96 font-bold mt-36'>Say hello to ReactJS</h1>
        <p className='ml-16 w-80 text-l my-4 mb-10'>You will learn how to use <br />the most popular frontend library,<br /> and become a super Ninja developer.</p>
        <button className='bg-white w-fit text-neutral-800 px-8 py-4 ml-16 mb-16 rounded-md font-bold text-l'>Awesome!</button>
      </div>
      <div id='info' className='flex justify-evenly items-center my-40'>
        <div className='flex flex-col w-40 justify-items-start text-left' id="declarative">
          <img className='mb-1 w-24 h-24' src={setting} alt="" />
          <h4 className='h-10 font-bold text-neutral-800 text-2xl'>Declarative</h4>
          <p className='h-10 text-sm text-neutral-400'>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='flex flex-col w-40 justify-items-start text-left' id="components">
          <img className='mb-1 w-24 h-24' src={home} alt="" />
          <h4 className='h-10 font-bold text-neutral-800 text-2xl'>Components</h4>
          <p className='h-10 text-sm text-neutral-400'>Build encapsulated components that manage their state.</p>
        </div>
        <div className='flex flex-col w-40 justify-items-start text-left' id="single-way">
          <img className='mb-1 w-24 h-24' src={gear} alt="" />
          <h4 className='h-10 font-bold text-neutral-800 text-2xl'>Single-Way</h4>
          <p className='h-10 text-sm text-neutral-400'>A set of immutable values are passed to the components.</p>
        </div>
        <div className='flex flex-col w-40 justify-items-start text-left' id="jsx">
          <img className='mb-1 w-24 h-24' src={code} alt="" />
          <h4 className='h-10 font-bold text-neutral-800 text-2xl'>JSX</h4>
          <p className='h-10 text-sm text-neutral-400'>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  )
}

export default App
