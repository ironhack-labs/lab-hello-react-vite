import "./App.css";
import DarkSection from "./components/DarkSection";
import LightSection from "./components/LighSection";

function App() {
  return (
    <div className="App">
      <DarkSection>A</DarkSection>
      <LightSection>B</LightSection>
    </div>
  );
}

export default App;
