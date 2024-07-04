import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header.jsx'
import Card from './card.jsx'
import './index.css'

const cardsData = [
  {
    image: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png',
    title: 'Declarative',
    text: 'React make it painless to create interactive UIs.'
  },
  {
    image: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png',
    title: 'Components',
    text: 'Build encapsulated that manage their state.'
  },
  {
    image: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png',
    title: 'Single Way',
    text: 'A set of immutable values are passed to the components'
  },
  {
    image: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png',
    title: 'JSX',
    text: 'Statically typed designed to run on modern browsers'
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <div className='cards'>
      {cardsData.map((card, index) => (
       <Card key={index} image={card.image} title={card.title} text={card.text} />
      ))}
    </div>
  </React.StrictMode>,
)
