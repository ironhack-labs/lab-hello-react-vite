import { CardIcon } from './CardIcon';
import PropTypes from 'prop-types';

const IconContainer = ({ cards }) => {
	return (
		<div className='card-container'>
			{cards.map((card, i) => {
				return <CardIcon key={i} card={card} />;
			})}
		</div>
	);
};

IconContainer.propTypes = {
	cards: PropTypes.arrayOf(CardIcon.propTypes.card),
};

export default IconContainer;
