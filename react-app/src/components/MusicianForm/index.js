import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideos, postNewVideo } from "../../store/videos";
import { useHistory, useParams } from "react-router";
import { getAllMusicians } from "../../store/musician";

const MusicianForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const { id } = useParams();
  const videos = useSelector((state) => state.videos);

  const [musician_name, setMusicianName] = useState("");
  const [profile_img, setProfileImg] = useState("");
  const [biography, setBiography] = useState("");

  useEffect(() => {
    dispatch(getAllMusicians());
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
          <input
            placeholder="file_url"
            name="url..."
            type="text"
            value={file_url}
            onChange={(e) => setFileUrl(e.target.value)}
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
