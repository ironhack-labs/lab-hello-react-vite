import React from 'react'
import tool from '../assets/icon1.png'
import pen from '../assets/icon2.png'
import mac from '../assets/icon3.png'
import lap from '../assets/icon4.png'

const Info = () => {
	return (
		<div id='info-container'>
			<div className='cards'>
				<img src={tool} alt='' />
				<h3>Declarative</h3>
				<p>React makes it painless to create interactive UIs.</p>
			</div>
			<div className='cards'>
				<img src={pen} alt='' />
				<h3>Components</h3>
				<p>Build encapsulated components that manage their state</p>
			</div>
			<div className='cards'>
				<img src={mac} alt='' />
				<h3>Single-Way</h3>
				<p>A set of immutable values are passed to the components.</p>
			</div>
			<div className='cards'>
				<img src={lap} alt='' />
				<h3>JSX</h3>
				<p>Statically-typed, designed to run on modern browsers.</p>
			</div>
		</div>
	)
}

export default Info
