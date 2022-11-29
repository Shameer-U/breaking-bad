export default (state, action) => {
    switch(action.type) {
      case 'FETCH_CHARACTERS':
        return {
          ...state, ...action.payload
        }
      case 'REMOVE_CHARACTERS':
        return {
          ...state, ...action.payload
        }
      case 'FETCH_CHARACTER_DETAILS':
        return {
          ...state, characterDetails: action.payload.details, status: action.payload.status,  fetching: action.payload.fetching
        }
      case 'REMOVE_CHARACTER_DETAILS':
        return {
          ...state, ...action.payload
        }
      default:
        return state;
    }
}