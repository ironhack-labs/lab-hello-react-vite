import "./App.css";
import DarkSection from "./components/DarkSection";
import LightSection from "./components/LightSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <DarkSection>
        <Navbar />
        <section id="landing">
          <h1 className="big-heading">Say hello to ReactJS</h1>
          <p>
            You will learn how to use
            <br /> the most popular frontend library,
            <br /> and become a super Ninja developer.
          </p>
          <a className="button-white">Awesome!</a>
        </section>
      </DarkSection>
      <LightSection>B</LightSection>
    </div>
  );
}

export default App;
