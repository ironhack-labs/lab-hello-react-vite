import LogoIcon from "../../assets/ironhack-logo-xs.png"
import MenuIcon from "../../assets/menu-top-xs.png"
import "./menu.css"

function Menu() {
    return(
        <nav className="navbar navbar-dark">
            <img
              src={LogoIcon}
              alt="background"
              className="logo"
            ></img>
            <img
              src={MenuIcon}
              alt="hamburger"
              className="hamburger"
            ></img>
          </nav>
    )
}

export default Menu;