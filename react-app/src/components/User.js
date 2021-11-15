import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOneUser} from '../store/user';
import DeleteMusician from './DeleteMusician';
import UsersMusicians from './UsersMusicians/UsersMusicians';

function User () {

  const dispatch = useDispatch();
  const { userId }  = useParams();
  // const musicians = useSelector(state => state.musician);
  const usersInformation = useSelector(state => state.usersReducer)

  useEffect(()=> {
    dispatch(getOneUser(Number(userId)))
  },[dispatch, userId])

  return (
    <div>
      <div className="user-page-container">
        <ol>
          <strong>Username</strong> {usersInformation.username}
        </ol>
        <ol>
          <strong>Email</strong> {usersInformation.email}
        </ol>
        <div id="your-musicians-text">
          <strong> Your Musicians </strong>
        </div>
        <button
         activeClassName='active'
          type="button"
          id="add-musician-btn"
        >
          <Link style={{textDecoration: "none"}}to={`/users/${userId}/add-musician`}>
            Add your musician here
          </Link>
        </button>
      </div>
      <UsersMusicians />
      {/* <div>
      <DeleteMusician />
      </div> */}
    </div>
  );
}
export default User;


//-REFACTORED BELOW CODE



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
