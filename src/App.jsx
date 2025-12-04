import "./App.css";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

const features = [
  {
    icon: icon1,
    title: "Declarative",
    description: "React makes it painless to create interactive UIs.",
  },
  {
    icon: icon2,
    title: "Components",
    description: "Build encapsulated components that manage their state.",
  },
  {
    icon: icon3,
    title: "Single-Way",
    description: "A set of immutable values are passed to the component's.",
  },
  {
    icon: icon4,
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers.",
  },
];

function App() {
  return (
    <div className="App">
      <Hero />
      <section className="features">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>
    </div>
  );
}

export default App;
