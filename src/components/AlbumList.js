import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../actions';
import { useParams } from 'react-router-dom';

const AlbumList =()=> {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums.albums);
  const loading = useSelector(state => state.albums.loading);
  const error = useSelector(state => state.albums.error);
  const { userId } = useParams();
  const user = useSelector(state => state.users.users.find(user => user.id === parseInt(userId)));

  useEffect(() => {
    dispatch(getAlbums(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Une erreur s'est produite: {error.message}</p>;
  }

  return (
    <div>
      <p>Voici les albums de {user ? user.name : ''}:</p>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
