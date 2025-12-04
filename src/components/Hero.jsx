import logo from "../assets/ironhack-logo-xs.png";
import menuIcon from "../assets/menu-top-xs.png";

function Hero() {
  return (
    <header className="hero">
      <nav className="hero__nav">
        <img src={logo} alt="Ironhack logo" className="hero__logo" />
        <img src={menuIcon} alt="Menu" className="hero__menu" />
      </nav>
      <div className="hero__content">
        <h1>
          Say hello to
          <br />
          ReactJS
        </h1>
        <p>
          You will learn how to use
          <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>
        <button className="hero__cta">Awesome!</button>
      </div>
    </header>
  );
}

export default Hero;
