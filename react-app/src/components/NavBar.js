import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from './auth/LogoutButton'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/session";
import "./NavBar.module.css";

const NavBar = () => {
  const loggedInUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const DemoLogin = () => {
    dispatch(login("demo@aa.io", "password"));
  };

  return (
    <nav className="nav_container">
      <div className="nav_bar_buttons">
        <button id="home">
          <NavLink
            to="/"
            exact={true}
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
        </button>
      </div>
      {!loggedInUser ? (
        <div className="nav_bar_buttons">
          <div id="login">
            <button id="login_nav">
              <NavLink
                to="/login"
                exact={true}
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                Login
              </NavLink>
            </button>
          </div>
        </div>
      ) : null}
      {loggedInUser ? (
        <div className='s3-test'>
          <button id='s3'>
          <NavLink to={`/api/musicians/${loggedInUser.id}/image`} exact={true} activeClassName='active'>
            Musicians Profile
          </NavLink>
          </button>
        </div>

      ) : null}
      {!loggedInUser ? (
        <div className="nav_bar_buttons">
          <div id="sign_up">
            <button id="sign_up">
              <NavLink
                to="/sign-up"
                exact={true}
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                Sign Up
              </NavLink>
            </button>
          </div>
        </div>
      ) : null}
      {!loggedInUser ? (
        <div>
          <button className="nav_bar_buttons" onClick={DemoLogin}>
            Demo
          </button>
        </div>
      ) : null}


      {loggedInUser ? (
        <div id="users_info">
          <div className="nav_bar_buttons">
            <NavLink
              to="/users"
              exact={true}
              activeClassName="active"
              style={{ textDecoration: "none" }}
            >
              Users
            </NavLink>
          </div>
        </div>
      ) : null}
      {loggedInUser ? (
        <div id='musicians-form'>
          <NavLink to='/musicians/new/musician'
          exact={true}
          activeClassName='active'
          style={{textDecoration: "none"}}
          >Upload</NavLink>
        </div>
      ) : null}
      {loggedInUser ? (
        <div className="nav_bar_buttons">
          <NavLink
            to="/musicians"
            exact={true}
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Musicians
          </NavLink>
        </div>
      ) : null}
      {loggedInUser ? (
          <div className="nav_bar_buttons">
            <LogoutButton />
          </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
