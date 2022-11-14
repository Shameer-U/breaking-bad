import { useParams } from "react-router";
import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './characterDetails.css';
import { Link } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';

const CharacterDetails = () => {
    const { id } = useParams();
    const { fetchCharacterDetails, removeCharacterDetails,  characterDetails, status, fetching } = useContext(GlobalContext);


    useEffect(() => {
        fetchCharacterDetails(id);

        return () => {
            removeCharacterDetails(); 
        };
    }, []);
     
  return (
    <>
        <Link to="/" className="back-btn">
            Go Back
        </Link>

        {fetching && <Spinner />}

        {status && (
            <div className="characterdetail-container">
                <div className="characterdetail-img">
                    <img src={characterDetails?.img} />
                </div>
                <div className="characterdetail-detail">
                    <ul>
                        <li>
                            <strong>Name</strong> : {characterDetails?.name}
                        </li>
                        <li>
                            <strong>Birthday</strong> : {characterDetails?.birthday}
                            
                        </li>
                        <li>
                            <strong>Nick name</strong> : {characterDetails?.nickname}
                        </li>
                        <li>
                            <strong>Status</strong> : {characterDetails?.status}
                            
                        </li>
                        <li>
                            <strong>Portrayed</strong> : {characterDetails?.portrayed}
                        </li>
                        <li>
                            <strong>occupation(s)</strong> : {" "}
                            {characterDetails?.occupation?.map((item, index) => {
                                  return characterDetails.occupation.length - 1 !== index ? `${item}, ` : item;
                            })}  
                        </li>
                    </ul>
                </div>
            </div> 
            )
        }  
    </>
  )
}

export default CharacterDetails;