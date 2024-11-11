import logo from '../assets/ironhack-logo-xs.png';
import menu from '../assets/menu-top-xs.png';

export const NavBar = () => {
	return (
		<div id='navbar'>
			<img id='logo' src={logo} alt='' />
			<img id='menu' src={menu} alt='' />
		</div>
	);
};

export default NavBar;
