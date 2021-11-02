import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMusicians } from "../../store/musician";
import { useHistory, useParams } from "react-router-dom";


const MusicianForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const {musicianId} = useParams();
  const musicians = useSelector((state) => Object.values(state.musician));
  const user = useSelector(state=> state.session.user);

  user.id = musicianId

  const [musician_name, setMusicianName] = useState("");
  const [profile_img, setProfileImg] = useState("");
  const [biography, setBiography] = useState("");

  useEffect(() => {
    dispatch(getAllMusicians(musicians));
  }, [dispatch]);

  const submitForm = async (e) => {
    e.preventDefault();
    const musician = { user_id, musician_name, biography, profile_img};
    await dispatch(postNewMusician(musician));
    history.push(`/videos/${title}`);
  };
  return (
    <div>
      <form onSubmit={submitForm} className="form-container">
        <div className="form-input-wrapper">
          <input
            placeholder="Artist Name..."
            name="artist name"
            type="text"
            value={musician_name}
            onChange={(e) => setMusicianName(e.target.value)}
          />
          <input
            placeholder="biography..."
            name="biography"
            type="text"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          />
          <input
            placeholder="Profile-Picture..."
            name="picture"
            type="file"
            value={profile_img}
            onChange={(e) => setProfileImg(e.target.value)}
          />
          <button className="video_form_button" type="submit">
            Upload Musician
          </button>
        </div>
      </form>
    </div>
  );
};

export default MusicianForm;
