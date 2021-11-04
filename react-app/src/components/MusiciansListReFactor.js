import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllMusicians } from "../store/musician";


function MusiciansListRefactor () {
  const dispatch = useDispatch();
  const musicians = useSelector((state) => Object.values(state.musician));

  useEffect(() => {
    dispatch(getAllMusicians());
  }, [dispatch]);

  const musiciansList = musicians.map((musician, idx) => {
    return (
      <li key={idx} className={"musician-li"}>
        <div className={"musician-p-container"}>
          <NavLink to={`/musicians/${musician.id}`}>
            <img
              src={musician.profile_img}
              alt="musician-p"
              className="thumbnail"
            ></img>
            <div className="musician-name">{musician.musician_name}</div>
          </NavLink>
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul>{musiciansList}</ul>
    </div>
  );
};

export default MusiciansListRefactor;