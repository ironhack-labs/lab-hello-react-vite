
import logo from '../../assets/images/ironhack-logo-xs.png'
import menu from '../../assets/images/menu-top-xs.png'

function Navbar() {
    return (
        <div className='d-flex justify-content-between'>
            <img src={logo} alt="iron hack logo" style={{objectFit: 'contain'}} />
            <img src={menu} alt="iron hack logo" style={{objectFit: 'contain'}} />
        </div>
    );
}

export default Navbar;