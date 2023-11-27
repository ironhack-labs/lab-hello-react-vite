import './App.css'
import Card from './Components/Card/Card'
import Nav from './Components/Nav/Nav'

function App() {
  const data =[
    {
       title: "Declaritive",
       text : "react bla bla ",
       src :"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
    },
    {
      title: "Components",
      text : "react bla bla ",
      src :"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
   },
   {
    title: "Single Way",
    text : "react bla bla ",
    src :"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
 }, 
 {
  title: "JSX",
  text : "react bla bla ",
  src :"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
}

  ]

  return (
    <div className="App">
      <Nav src1={"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"}
      src2={"https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"}/>
      {data.map(({title,text,src},index)=>(
        <Card className="CardLayout" title={title} text={text} src={src} key={index}/>
      ))}
    </div>
  )
}

export default App
