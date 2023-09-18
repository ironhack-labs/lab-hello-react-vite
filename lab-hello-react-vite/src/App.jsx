// src/App.jsx
import './App.css';
import logo from  "./assets/react.png"
import burgerIcon from "./assets/menu-top-xs.png";

const cards = [
  {
    img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
    title: "Declarative",
    subtitle: "React makes it painless to create interactive UI's."
  },
  {
    img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
    title: "Components",
    subtitle: "Build encapsulated componenets that amanages their state."
  },
  {
    img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
    title: "Single-Way",
    subtitle: "A set of immutable values are passed to the component's."
  },
  {
    img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
    title: "JSX",
    subtitle: "Statically-types designed to run on modern browsers."
  }
]
const InfoCard = ({ img, title, subtitle }) => {
  return (
    <div className="container">
      <img src= {img} alt="reactImage"/>
      <h3> {title}</h3>
      <p> {subtitle} </p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="hero">
        <nav className="navbar">
          <ul className= "nav-items">
            <li><img src= {logo} alt=""/></li>
            <li><img src= {burgerIcon} alt=""/></li>
          </ul>
        </nav>
        <div className= "top">
          <h1>Say hello to ReactJS</h1>
          <h4>You will leanr how to use the most populaye frontend library, and become a super Ninja developer</h4>
          <button>Awesome!</button>
        </div>
      </div>
      <div className = "tiles">
        {cards.map(({ i, img, title , subtitle}) => {
          return (
            <InfoCard
              key={i}
              img={img}
              title={title}
              subtitle= {subtitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;