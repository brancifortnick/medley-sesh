import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMusicians } from "../../store/musician";
import './AllMusicians.css';


const AllMusicians = () => {
  const dispatch = useDispatch();
  const musicians = useSelector((state) => Object.values(state.musician));

  useEffect(() => {
    dispatch(getAllMusicians());
  }, [dispatch]);

  return (
    <div id="outer-div">
      <ul id="musician-details">
        {musicians.map((musician) => (
          <Link to={`/musicians/${musician.id}`}>
            <div id="musician_id" key={musician.id}></div>
            <div>{musician.musician_name}</div>
            <img src={musician.profile_img} alt=""></img>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default AllMusicians;
