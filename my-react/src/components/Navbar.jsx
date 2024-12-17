import logo from '../assets/ironhack-logo-xs.png'
import menu from '../assets/menu-top-xs.png'
function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} alt="logo"/>
            <img src={menu} alt="menu"/>
        </div>
    );
}
export default Navbar;