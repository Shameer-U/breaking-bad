import { Link } from 'react-router-dom';
import './characterItem.css';
import IMAGES from '../../constants/Images';

const CharacterItem = (props) => {
    const { character } = props;

    return (
        <div className="character-item">
            <div className='character-img'>
                 <img src={character?.img ? character.img : IMAGES.NO_IMAGE} />
            </div>
            <div className="character-details">
                <div>
                    {character?.name}
                </div>

                <Link
                    to={`character/${character?.char_id}`}
                >
                    <span className='character-btn'>View Details</span>
                </Link>
            </div>
        </div>
    );
}

export default CharacterItem;