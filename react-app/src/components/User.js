import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOneUser} from '../store/user';
import UsersMusicians from './UsersMusicians/UsersMusicians';

function User () {

  const dispatch = useDispatch();
  const { userId }  = useParams();
  const usersInformation = useSelector(state => state.usersReducer)


  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);

  // if (!user) {
  //   return null;
  // }

  useEffect(()=> {
    dispatch(getOneUser(Number(userId)))
  },[dispatch, userId])

  return (
    <div>
      <div className="user-page-container">
        <li>
          <strong>Username</strong> {usersInformation.username}
        </li>
        <li>
          <strong>Email</strong> {usersInformation.email}
        </li>
        <h3> Your Musicians </h3>
        <button type='button' id='add-musician-btn'>
          <Link to={`/users/${userId}/add-musician`}>Add your musician here</Link>
        </button>
      </div>
      <UsersMusicians />
    </div>
  );
}
export default User;
