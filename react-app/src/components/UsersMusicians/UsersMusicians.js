import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getAllMusicians } from "../../store/musician";
import DeleteMusician from "../DeleteMusician";

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
      <li key={idx} className="musician-li">
        <div className="musician-div">
            <img src={musician.profile_img} alt="_blank" className="card"></img>
            {musician.musician_name}
          <NavLink to={`/musicians/${musician.id}`}>
          </NavLink>
          {/* <DeleteMusician musicianId={musician.id} /> */}
        </div>
      </li>
    ) : null;
  });

  return (
    <div className="musician-container">
      <ul>{usersMusicians}</ul>
    </div>
  );
};

export default UsersMusicians;
