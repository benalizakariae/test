const initialState = {
    albums: [],
    loading: false,
    error: null
  }
  
  const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOADING_ALBUMS':
        return {
          ...state,
          loading: true
        }
      case 'FETCH_ALBUMS':
        return {
          ...state,
          albums: action.payload,
          loading: false
        }
      case 'FETCH_ALBUMS_ERROR':
        return {
          ...state,
          error: action.payload,
          loading: false
        }
      default:
        return state;
    }
  }
  
  export default albumsReducer;
  
  