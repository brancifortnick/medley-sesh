import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getAllMusicians } from "../../store/musician";
// import DeleteMusician from "../DeleteMusician";
import './UsersMusicians.css';

const UsersMusicians = () => {
  const dispatch = useDispatch();
  const musicians = useSelector((state) => Object.values(state.musician));
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllMusicians());
  }, [dispatch]);



//! I think the errror is comming from NavLink potentially ==== not showing musicians on users/id route ---- find why not!!!!!!!!!



  const usersMusicians = musicians.map((musician, idx) => {
    return user.id === Number(musician.user_id) ? (
      <ol key={idx} className="musician-li">
        <div id='musician-name'>
          {musician.musician_name}
        </div>
        <div className="musician-div">
            <img src={musician.profile_img} alt="_blank" className="card" style={{height: "500px", width: "600px"}}></img>
            <div id='add-musician-link'>
          <NavLink to={`/musicians/${musician.id}`}>
          </NavLink>
          </div>
        </div>
          {/* <DeleteMusician musicianId={musician.id} /> */}
      </ol>
    ) : null;
  });

  return (
    <div className="musician-container">
      <ul>{usersMusicians}</ul>
    </div>
  );
};

export default UsersMusicians;
