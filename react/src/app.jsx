import Title from "./components/title/title";
import Button from "./components/button/button";
import Menu from "./components/menu/menu";
import Card from "./components/card/card";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App p-5">
      <main className="main p-5">
        <div className="container-fluid">
          <Menu></Menu>
          <div className="row main-row">
            <div className="col-lg-6">
              <Title>Say hello to ReactJS</Title>
              <p className="main-text mt-4 text-white text-break">
                You will learn how to use<br></br> the most popular frontend
                library,<br></br>and become a super Ninja developer.
              </p>
              <div className="mt-5">
                <Button className="main-button text-black bg-light p-3 rounded-2 fw-bold">
                  Awesome!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className="row features align-items-baseline p-5 mt-5">
          <Card
            img={icon1}
            title="Declarative"
            text="React makes it painless to create interactive UIs."
          ></Card>
          <Card
            img={icon2}
            title="Components"
            text="Buil encapsulated components that manage their state"
          ></Card>
          <Card
            img={icon3}
            title="Single-Way"
            text=" A set of immutable values are passed to the component's."
          ></Card>
          <Card
            img={icon4}
            title="JSX"
            text="Statically-typed, designed to run on modern browsers."
          ></Card>
        </div>
      </section>
    </div>
  );
}

export default App;
