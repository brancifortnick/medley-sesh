import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOneUser} from '../../store/user';
import UsersMusicians from '../UsersMusicians/UsersMusicians';
import './User.css'


function User () {

  const dispatch = useDispatch();
  const { userId }  = useParams();
  // const musicians = useSelector(state => state.musician);
  const usersInformation = useSelector(state => state.usersReducer)

  useEffect(()=> {
    dispatch(getOneUser(Number(userId)))
  },[dispatch, userId])

  return (
    <>
      <div className="user-page-container">
        <ol>
          <strong>Username</strong> {usersInformation.username}
        </ol>
        <ol>
          <strong>Email</strong> {usersInformation.email}
        </ol>
      </div>

      {/* <div id="add-musician-link"> */}
      <div id="add-musicians-button">
        <button activeClassName="active" type="button" id="add-musician-btn">
          <Link
            style={{ textDecoration: "none" }}
            to={`/users/${userId}/add-musician`}
          >
            Add your musician here
          </Link>
        </button>
      </div>
      <div id="your-musicians-container">
        <strong> Your Musicians </strong>
      </div>
      {/* </div> */}
      <div id="usersMusicians-component">
        <div id="component">
          <UsersMusicians />
        </div>
      </div>
      {/* <div>
      <DeleteMusician />
      </div> */}
    </>
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
