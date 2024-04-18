import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import FeaturesList from './components/FeaturesList/FeaturesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar 
        logoLink="#"
        logoUrl="/src/assets/ironhack-logo-xs.png"
        logoTitle="IronHack!"
      />

      <Hero 
      mainTitle="Say hello to ReactJS"
      leadText="You will learn how to use the most popular frontend library, and become a super Ninja devloper."
      ctaUrl="#"
      ctaText="Awesome!"
      />

      <FeaturesList />
    </div>
  );
}

export default App;