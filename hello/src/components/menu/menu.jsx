import "./menu.css"
import LogoIcon from "../../assets/ironhack-logo-xs.png"
import MenuIcon from "../../assets/menu-top-xs.png"

function Menu () {
    return (
        <div className="menu">
            <img className="logo" src={LogoIcon} />
            <img className="menu-icon" src={MenuIcon} />
        </div>
    )
}

export default Menu;