import './NavBar.css'
const menuImg = '/src/assets/menu-icon.png'

export default function NavBar(props) {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar_logo">
					<a href={props.logoLink}>
						<img 
							src={props.logoUrl} 
							alt={props.logoTitle}
							width={props.width}
							height={props.height}
						/>
					</a>
				</div>
				<div className="navbar_menu">
					<a href="#">
						<img src={menuImg} 
							width="40"
							height="40" alt="menu" />
					</a>
				</div>
			</div>
		</nav>
	)
}
