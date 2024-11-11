// import PropTypes from 'prop-types';
/* eslint react/prop-types: 0 */

export const CardIcon = ({ card }) => {
	return (
		<div className='card'>
			<img src={card.imagePath} alt='icon' />
			<h6>{card.title}</h6>
			<p>{card.text}</p>
		</div>
	);
};

// CardIcon.propTypes = {
// 	card: PropTypes.shape({
// 		imagePath: PropTypes.string,
// 		title: PropTypes.string,
// 		text: PropTypes.string,
// 	}),
// };

export default CardIcon;
