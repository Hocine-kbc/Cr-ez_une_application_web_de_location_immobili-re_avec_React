import { FaStar } from 'react-icons/fa';
import '../Rating/rating.scss';

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? 'star filled' : 'star empty'}
        />
      ))}
    </div>
  );
};

export default Rating;
