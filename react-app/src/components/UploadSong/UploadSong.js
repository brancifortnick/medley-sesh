import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewSong } from "../../store/song";
import { getMusiciansTracks } from "../../store/song";

const UploadSong = ({ musicianId }) => {
  const history = useHistory()
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);

  const [title, setTitle] = useState("");
  const [file_url, setSong] = useState(null);
  const [song_img, setSongImg] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file_url", file_url);
    formData.append('song_img', song_img);

    const res = await fetch('/api/songs/new-song', {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      let file_url = await res.json();
      dispatch(createNewSong(title, file_url, song_img, user.id));
    } else {
      console.log(
        "error from UploadSong component front end-------------+++++------"
      );
    }
      history.push(`/users/${user.id}`)
  };

  const uploadTrack = async (e) => {
    const file = e.target.files[0];
    setSong(file);
  };

//   const uploadPicture = async (e) => {
//       const file = e.target.files[1]
//       setSongImg(file);
//   }

  useEffect(() => {
    dispatch(getMusiciansTracks(parseInt(musicianId)));
  }, [dispatch, musicianId]);

  return (
    <div>
      <h1>Upload a new track</h1>
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <label id="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          {/* {check to make sure that this file is completely on target---- thinking error could also come from below input--S3 Auth/access is issue i think as well} */}
          <label className="form-input">Song</label>
          <input
            name="file_url"
            accept="audio/*"
            type="file"
            onChange={uploadTrack}
          />
          <label className='form-input'>Album Art</label>
          <input
            name='song_img'
            accept='image/*'
            type='file'
            onChange={(e) => setSongImg(e.target.files[1])}
            value={song_img}
            />
          <button type="submit" id="create-song-btn">
            Upload Track
          </button>
        </div>
      </form>
    </div>
  );
};
export default UploadSong;
