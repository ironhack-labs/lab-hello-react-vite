import React from 'react'
import logo from '../assets/ironhack-logo-xs.png'
import ham from '../assets/menu-top-xs.png'
import re1 from '../assets/react.svg'
import re2 from '../assets/react.svg'
import re3 from '../assets/react.svg'
import re4 from '../assets/react.svg'
import re5 from '../assets/react.svg'
import re6 from '../assets/react.svg'

const Hero = () => {
	return (
		<div id='hero'>
			<nav>
				<img src={logo} alt='' />
				<img src={ham} alt='' />
			</nav>
			<div className='text-imgs-container'>
				<div className='text-container'>
					<h1>Say hello to ReactJS</h1>
					<p>
						You will learn to use the mosto popular frontend
						library, and become a super Ninja developer.
					</p>
					<button>Awesome!</button>
				</div>
				<div></div>
			</div>
			<div id='react-pngs'>
				<img src={re1} alt='' id='react1' />
				<img src={re2} alt='' id='react2' />
				<img src={re3} alt='' id='react3' />
				<img src={re4} alt='' id='react4' />
				<img src={re5} alt='' id='react5' />
				<img src={re6} alt='' id='react6' />
			</div>
		</div>
	)
}

export default Hero
