import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import UserList from './components/UserList';
import AlbumList from './components/AlbumList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={UserList} />
        <Route path="/albums/:userId" exact component={AlbumList} />
      </Router>
    </Provider>
  );
}

export default App;
