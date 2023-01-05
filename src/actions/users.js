import axios from 'axios';

export const getUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => dispatch({ type: 'FETCH_USERS', payload: response.data }))
      .catch(error => dispatch({ type: 'FETCH_USERS_ERROR', payload: error }));
  }
}
