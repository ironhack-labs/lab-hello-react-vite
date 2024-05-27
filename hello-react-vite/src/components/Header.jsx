import ironhackLogo from "../assets/ironhack-logo-xs.png";
import menuIcon from "../assets/menu-top-xs.png";

function Header() {
  return (
    <div class="intro">

      <div className="nav-bar">
        <img
          src={ironhackLogo}
          alt="ironhack logo white"
          className="ironhack-logo"
        />
        <img src={menuIcon} alt="menu icon" className="menu-icon" />
      </div>

      <div class="header">
        <h1>
          Say hello to <br /> ReactJS
        </h1>
        <p>
          You will learn how to use <br /> the most popular frontend library,
          <br /> and become a super Ninja developer.
        </p>
        <button>Awesome!</button>

      </div>

    </div>
  );
}

export default Header;
