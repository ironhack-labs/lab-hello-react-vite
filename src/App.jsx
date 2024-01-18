import "./App.css";
import DarkSection from "./components/DarkSection";
import FeatureCard from "./components/FeatureCard";
import LightSection from "./components/LightSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <DarkSection>
        <Navbar />
        <section id="landing">
          <h1 className="text-xxl">Say hello to ReactJS</h1>
          <p>
            You will learn how to use
            <br /> the most popular frontend library,
            <br /> and become a super Ninja developer.
          </p>
          <a className="button-white">Awesome!</a>
        </section>
      </DarkSection>
      <LightSection>
        <section id="features">
          <div className="wrapper">
            <FeatureCard
              title={"Declarative"}
              description={"React makes it painless to create interactive UIs."}
              imgSrc={"./landing-page-icon.png"}
              imgAlt={"Declarative Feature Icon"}
            />
            <FeatureCard
              title={"Components"}
              description={
                "Build encapsulated components that manage their state."
              }
              imgSrc={"./landing-page-icon-2.png"}
              imgAlt={"Components Feature Icon"}
            />
            <FeatureCard
              title={"Single-Way"}
              description={
                "A set of immutable values are passed to the component's."
              }
              imgSrc={"./landing-page-icon-3.png"}
              imgAlt={"Single-Way Feature Icon"}
            />
            <FeatureCard
              title={"JSX"}
              description={
                "Statically-typed, designed to run on modern browsers."
              }
              imgSrc={"./landing-page-icon-4.png"}
              imgAlt={"JSX Feature Icon"}
            />
          </div>
        </section>
      </LightSection>
    </div>
  );
}

export default App;
