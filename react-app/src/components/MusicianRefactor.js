import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOneMusician, deleteOneMusician } from "../store/musician";
import UpdateBiography from "./UpdateBiography";
import ImageUpload from "./ImageUpload";
import DeleteMusician from "./DeleteMusician";

function Musician() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const { musicianId } = useParams();
  const musicians = useSelector((state) => state.musician);

  const hey = console.log("hey")

  useEffect(() => {
    dispatch(getOneMusician(Number(musicianId)));
  }, [dispatch, musicianId]);
//a
  return (
    <div className="card-container">
      {musicians.profile_img !== null ? (
        <img
          className="card"
          style={{ height: "300px", width: "150px" }}
          src={musicians?.profile_img}
          alt="profile_img"
        ></img>
      ) : (
        <img
          className="card"
          // style={{height: "300px", width: "150px"}}
          src="https://blueheronhillsgc.com/wp-content/uploads/2016/03/female-profile-blank.jpg"
          alt="blank"
        ></img>
      )}
      {currentUser.id === Number(musicians.user_id) ? (
        <div>
          <ImageUpload musicianId={musicianId} />
          <strong>Biography:</strong>
        </div>
      ) : null}
      {musicians.biography}
      {currentUser.id === Number(musicians.user_id) ? (
        <div>
          <UpdateBiography
            musicianBiography={musicians.biography}
            musicianId={musicianId}
          />

        </div>
      ) : null}
       {currentUser.id === Number(musicians.user_id) ? (
           <DeleteMusician musicianId={musicianId} />
          ): null }
    </div>
  );
}
export default Musician;
