
import Navbar from './assets/components/navbar'
import PhotoElements from './assets/components/photo-elements'
import Button from './assets/components/button'
import Main from './assets/components/main'
import Subtitle from './assets/components/subtitle'

import iconOne from './assets/images/icon1.png'
import iconTwo from './assets/images/icon2.png'
import iconThree from './assets/images/icon3.png'
import iconFour from './assets/images/icon4.png'

import './App.css'

function App() {

  return (
    <div className='App'>
      <div style={{backgroundColor: '#1e2434', padding: '50px'}}>
        <Navbar></Navbar>
        <Main></Main>
        <Subtitle></Subtitle>
        <Button></Button>
      </div>
      <div className="d-flex" style={{backgroundColor: '#ffffff'}}>
        <PhotoElements
          image={iconOne}
          title={'Declarative'}
          text={'React makes it painless to create interactive UIs.'}>
        </PhotoElements>
        <PhotoElements
          image={iconTwo}
          title={'Components'}
          text={'Build encapsulated components that manage their state.'}>
        </PhotoElements>
        <PhotoElements
          image={iconThree}
          title={'Single-Way'}
          text={"A set of immutable values are passed to the component's."}>
        </PhotoElements>
        <PhotoElements
          image={iconFour}
          title={'JSX'}
          text={'Statically-typed, designed to run on modern browsers.'}>
        </PhotoElements>
      </div>
    </div>
  )
}

export default App
