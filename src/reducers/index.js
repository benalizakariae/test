import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import albumsReducer from './albumsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  
});

export default rootReducer;

