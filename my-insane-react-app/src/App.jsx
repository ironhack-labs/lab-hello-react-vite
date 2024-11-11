import './reset.css';
import './App.css';
import Header from './components/Header';
import ContainerCards from './components/ContainerCards';

import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
	const cards = [
		{
			imagePath: icon1,
			title: 'Declarative',
			text: 'React makes it painless to create interactive UIs.',
		},
		{
			imagePath: icon2,
			title: 'Components',
			text: 'Build encapsulated components that manage their state.',
		},
		{
			imagePath: icon3,
			title: 'Single-Way',
			text: "A set of immutable values are passed to the component's.",
		},
		{
			imagePath: icon4,
			title: 'JSX',
			text: 'Statically-typed, designed to run on modern browsers.',
		},
	];

	return (
		<div className='App'>
			<Header />
			<ContainerCards cards={cards} />
		</div>
	);
}

export default App;
