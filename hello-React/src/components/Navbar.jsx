import ironLogo from '../assets/ironhack-logo-xs.png ';
import topMenu from '../assets/menu-top-xs.png';

function Navbar() {
    return (
        <div className="navbar">
            <img src={ironLogo} alt="ironhack logo" />
            <img src={topMenu} alt="menu icon" />

        </div>
    );
}

export default Navbar;