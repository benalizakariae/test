const initialState = {
    users: [],
    loading: false,
    error: null
  }
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOADING_USERS':
        return {
          ...state,
          loading: true
        }
      case 'FETCH_USERS':
        return {
          ...state,
          users: action.payload,
          loading: false
        }
      case 'FETCH_USERS_ERROR':
        return {
          ...state,
          error: action.payload,
          loading: false
        }
      default:
        return state;
    }
  }
  
  export default usersReducer;
  