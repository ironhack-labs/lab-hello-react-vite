import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Info from './components/Info'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Hero />
			<Info />
		</>
	)
}

export default App
