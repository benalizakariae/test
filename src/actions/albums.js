import axios from 'axios';

export const getAlbums = (userId) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ALBUMS' });
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then(response => dispatch({ type: 'FETCH_ALBUMS', payload: response.data }))
      .catch(error => dispatch({ type: 'FETCH_ALBUMS_ERROR', payload: error }));
  }
}
