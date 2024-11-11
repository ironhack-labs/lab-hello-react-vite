import PropTypes from 'prop-types';

export const CardIcon = ({ card }) => {
	console.log(card);

	return (
		<div className='card'>
			<img src={card.imagePath} alt='icon' />
			<h6>{card.title}</h6>
			<p>{card.text}</p>
		</div>
	);
};

CardIcon.propTypes = {
	card: {
		imagePath: PropTypes.string,
		title: PropTypes.string,
		text: PropTypes.string,
	},
};
