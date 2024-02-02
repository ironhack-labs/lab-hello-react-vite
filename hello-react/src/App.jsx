import './App.css'
import logo from "./assets/logo.png"
import menu from "./assets/menu.png"
import InfoBar from './components/InfoBar'



function App() {


  return (
    <div>
      <div id='intro-billboard' className='text-white bg-neutral-800 flex flex-col justify-items-start text-left w-11/12 mx-auto mt-16'>
        <nav className='flex justify-between mx-16 my-4'>
          <img src={ logo } alt="ironhack-logo" className='w-12 h-12'/>
          <button><img src={ menu } alt="hamburger-menu" className='w-12 h-12'/></button>
        </nav>
        <h1 className='text-white text-7xl ml-16 w-96 font-bold mt-36'>Say hello to ReactJS</h1>
        <p className='ml-16 w-80 text-l my-4 mb-10'>You will learn how to use <br />the most popular frontend library,<br /> and become a super Ninja developer.</p>
        <button className='bg-white w-fit text-neutral-800 px-8 py-4 ml-16 mb-16 rounded-md font-bold text-l'>Awesome!</button>
      </div>
      <InfoBar />
    </div>
  )
}

export default App
