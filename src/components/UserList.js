import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions';
import { useNavigate } from 'react-router-dom';

const UserList =()=> {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Une erreur s'est produite: {error.message}</p>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => {
          navigate(`/albums/${user.id}`);
        }}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
