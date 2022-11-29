import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
   characters: [],
   search: false,
   status: false,
   fetching : false,
   characterDetails: {}
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const fetchCharacters = () => {
    dispatch({type: 'FETCH_CHARACTERS', payload: {search: false, status:true, fetching:true}});

    let characters = [];

    fetch(`https://www.breakingbadapi.com/api/characters`)
    .then(res => {
        return res.json();
    })
    .then(res => {
         if (res.length > 0) {
            characters = res;
         }
         
         dispatch({type: 'FETCH_CHARACTERS', payload: {characters, search: false, status:true, fetching:false}});
    })
    .catch(err => {
        console.log('fetchCharacters-error',err);
        dispatch({type: 'FETCH_CHARACTERS', payload: {characters, search: false, status:false, fetching:false}});
    });
  }

  const removeCharacters = () => {
    dispatch({type: 'REMOVE_CHARACTERS', payload: { characters: [], search: false, status:true, fetching:false}});
  }

  const searchCharacters =  async (searchTerm) => {
    dispatch({type: 'FETCH_CHARACTERS', payload: {search: true, status:true, fetching:true}});

    let characters = [];
    
    try {
        let res = await fetch(`https://www.breakingbadapi.com/api/characters?name=${searchTerm}`);
        res = await res.json();

        if (res.length > 0) {
          characters = res;
        }
       
       dispatch({type: 'FETCH_CHARACTERS', payload: {characters, search: false, status:true, fetching:false}});

    } catch (err) {
        console.log('searchCharacters-error', err);
        dispatch({type: 'FETCH_CHARACTERS', payload: {characters, search: true, status:false, fetching:false}});
    }
  }

  const fetchCharacterDetails = (id) => {
    dispatch({type: 'FETCH_CHARACTER_DETAILS', payload: {status:true, fetching:true}});

    let details = {};

    axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    .then(res => {
      if (res?.data[0]) {
        details =  res.data[0];
      }
      
      dispatch({type: 'FETCH_CHARACTER_DETAILS', payload: {details, status:true, fetching:false}});
    })
    .catch(err => {
      console.log('fetchCharacterDetails-error', err);
      dispatch({type: 'FETCH_CHARACTER_DETAILS', payload: {details, status:false, fetching:false}});
    });
  }

  const removeCharacterDetails = () => {
    dispatch({type: 'REMOVE_CHARACTER_DETAILS', payload: {characterDetails:{}, status:false, fetching:false} });
  }

  return (
    <GlobalContext.Provider value={
                                    {
                                        characters: state.characters,
                                        search: state.search,
                                        status: state.status,
                                        fetching: state.fetching,
                                        characterDetails: state.characterDetails,
                                        fetchCharacters,
                                        removeCharacters,
                                        searchCharacters,
                                        fetchCharacterDetails,
                                        removeCharacterDetails
                                    }
                                  }
    >
      {children}
    </GlobalContext.Provider>
  );
}