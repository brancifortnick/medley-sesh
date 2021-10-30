import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from 'react-router-dom';
import { getAllMusicians } from "../../store/musician";

const AllMusicians = () => {
  const dispatch = useDispatch();
  const musicians = useSelector(state => Object.values(state.musician));

    useEffect(()=> {
        dispatch(getAllMusicians());
    },[dispatch])
return (
    <div id='outer-div'>
      <ul id="musician-details">
        {musicians.forEach((musician) => {
          <NavLink to={`/musicians/${musician.id}`}>
            <div className="musician-name" key={musician.id}>
              {musician.musician_name}
            </div>
            <img src={musician.profile_img} alt=""></img>
          </NavLink>;
        })}
      </ul>
    </div>
  );
};
export default AllMusicians;
