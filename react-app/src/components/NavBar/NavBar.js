import React from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useDispatch, useSelector } from "react-redux";
import { demoLogin } from "../../store/session";
import "./NavBar.css";

const NavBar = () => {

  const user = useSelector((state) => state.session.user);
  // const musicians = useSelector(state => Object.values(state.musician));
  // const songs = useSelector(state => Object.values(state.song));
  const dispatch = useDispatch();
  const history = useHistory();

  const demoFunction = async (e) => {
    e.preventDefault();
    dispatch(demoLogin());
    history.push("/");
  };

  return (
    <nav className="nav_container">
      {user ? (
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
      ) : null}
      {!user ? (
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
      {!user ? (
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
      {!user ? (
        <div>
          <button id="demo-button" onClick={demoFunction}>
            Demo
          </button>
        </div>
      ) : null}
      {user ? (
        <div className="nav_bar_buttons">
          <button id="user-page">
            <NavLink
              to={`/users/${user.id}`}
              exact={true}
              activeClassName="active"
              style={{ textDecoration: "none" }}
            >
              {`${user.username}s Profile`}
            </NavLink>
          </button>
        </div>
      ) : null}
      {/* {user ? (
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
      ) : null} */}
      {user ? (
        <div className="nav_bar_buttons">
          <button id="musicians-form">
            <div id="musicians-form">
              <NavLink
                to={`/users/${user.id}/add-musician`}
                exact={true}
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                Upload Musician
              </NavLink>
            </div>
          </button>
        </div>
      ) : null}
      {/* {user ? (
        <div id="uploadSong-form">
          <NavLink
            to={`/musicians/${user.id}/songs/new`}
            exact={true}
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Upload Your Music
          </NavLink>
        </div>
      ) : null} */}
      {user ? (
        <div className="nav_bar_buttons">
          <button id="musicians-list">
            <div id="musicians">
              <NavLink
                to="/musicians"
                exact={true}
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                Musicians
              </NavLink>
            </div>
          </button>
        </div>
      ) : null}
      {user ? (
        <div className="nav_bar_buttons">
          <LogoutButton />
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
