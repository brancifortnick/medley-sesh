import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams} from "react-router-dom";
import { getOneMusician} from "../../store/musician";
import UpdateBiography from "../UpdateBiography/UpdateBiography";
import DeleteMusician from '../DeleteMusician/DeleteMusician';
import AllSongs from "../AllSongs/AllSongs";
import UploadSong from "../UploadSong/UploadSong";
// import ImageUpload from "./ImageUpload";
import CommentCreate from "../CommentCreate/CommentCreate";
import './MusicianRefactor.css'

const Musician = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const { musicianId } = useParams();
  // const musicians = useSelector((state) => Object.values(state.musician));
  const musicians = useSelector(state => state.musician);

  useEffect(() => {
    dispatch(getOneMusician(Number(musicianId)));
  }, [dispatch, musicianId]);

  return (
    <div className="card-container">
      {musicians.profile_img !== null ? (
        <img
          className="card"
          style={{
            height: "300px",
            width: "500px",
            paddingTop: "20px",
            marginTop: "20px",
          }}
          src={musicians?.profile_img}
          alt="profile_img"
        ></img>
      ) : (
        <img
          className="card"
          style={{ height: "300px", width: "150px" }}
          src="https://via.placeholder.com/350x150"
          alt="blank"
        ></img>
      )}
      <div className="audio-div">
        {" "}
        <AllSongs musicianId={musicianId} />
      </div>
      <div className="biography-div">
        <div id="bio">
          <strong>Biography</strong>
        </div>
        {musicians.biography}
        {currentUser.id === Number(musicians.user_id) ? (
          <div id="update-biography">
            <UpdateBiography
              musicianBiography={musicians.biography}
              musicianId={musicianId}
            />
          </div>
        ) : null}
      </div>

      <div>
        {currentUser.id === Number(musicians.user_id) ? (
          <DeleteMusician musicianId={musicianId} />
        ) : null}
      </div>
      {/* <div className="comment-create">
        {currentUser ? (
        <CommentCreate />
        ): null} */}
      {/* </div> */}
      <div>
        {currentUser.id === Number(musicians.user_id) ? (
          <UploadSong musicianId={musicianId} />
        ) : null}
      </div>
    </div>
  );
}
export default Musician;
