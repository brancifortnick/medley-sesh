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
      <>
      <ol key={idx} className="musician-ol">
        {/* <div id="musician-name">{musician.musician_name}</div> */}
        <NavLink to={`/musicians/${musician.id}`}>{`View ${musician.musician_name}`}</NavLink>
        <div className="musician-div">
          <img
            src={musician.profile_img}
            alt="_blank"
            className="card"
            style={{ height: "500px", width: "600px" }}
          ></img>
          <div id="add-musician-link"></div>
        </div>
      </ol>
     </>
    ) : null;
  });

  return (
    <div className="musician-container">
      <div id='users-musicians'>{usersMusicians}</div>
    </div>

  );
};

export default UsersMusicians;
