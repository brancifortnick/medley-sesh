
import React from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

import { useSelector, useDispatch } from 'react-redux';

const NavBar = () => {
  // const dispatch = useDispatch()
  // const history = useHistory();
  const user = useSelector(state => state.session.user)




  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/${user.id}`} exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
