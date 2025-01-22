import PropTypes from 'prop-types';
import './../Styles/Card.css';

const Card = ({ id, url, handleCardClick }) => {
  return (
    <div className="card" onClick={() => handleCardClick(id)}>
      <img src={url} alt="memory card" />
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default Card;
