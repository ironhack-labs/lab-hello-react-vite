import './App.css'
import Button from './components/button/button'
import Card from './components/card/card'
import Menu from './components/menu/menu'
import Paragraph from './components/paragraph/paragraph'
import Title from './components/title/title'
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {

  return (
      <div className='App'>
        <div className='Hero'>
          <Menu></Menu>
          <div className='hero-section'>
            <Title>Say hello to ReactJS</Title>
            <Paragraph>You will learn how to use the most popular frontend library, and become a super Ninja developer.</Paragraph>
            <Button>Awesome!</Button>
          </div>
        </div>
        <div className='section'>
          <Card img={icon1} title="Declarative">
            React makes it painless to create interactive UIs.
          </Card>
          <Card img={icon2} title="Components">
            Buil encapsulated components that manage their state
          </Card>
          <Card img={icon3} title="Single-Way">
            A set of immutable values are passed to the component's.
          </Card>
          <Card img={icon4} title="JSX">
            Statically-typed, designed to run on modern browsers.
          </Card>
        </div>
      </div>  
  )
}

export default App
