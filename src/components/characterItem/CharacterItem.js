import { Link } from 'react-router-dom';
import './characterItem.css';

const CharacterItem = (props) => {
    const { character } = props;

    return (
        <div className="character-item">
            <div className="character-body">
                <div className="character-details">
                    <div> 
                        {character?.name}
                    </div>
                </div>
                <div>
                    <Link
                        to={`character/${character.char_id}`}
                    >
                        <span className='character-btn'>View Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CharacterItem;