import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session'
import { Redirect } from 'react-router-dom';
// import './LogoutButton.css'


const LogoutButton = () => {

  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  const onLogout = async(e) => {
     if (!user) {
    return <Redirect to="/" />;
  }
    dispatch(logout());
  };




  return (
    <button className="log-out-button" name="log-out" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
