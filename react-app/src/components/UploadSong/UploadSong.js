import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewSong } from "../../store/song";
import { getMusiciansTracks } from "../../store/song";
import './UploadSong.css'


const UploadSong = ({ musicianId }) => {
  const history = useHistory()
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);

  const [title, setTitle] = useState("");
  const [file_url, setSong] = useState('');
  const [song_img, setSongImg] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file_url", file_url);

    const res = await fetch('/api/songs/new-song', {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      let file_url = await res.json();
      dispatch(createNewSong(title, file_url, song_img, user.id));
    } else {
      console.log(
        "error - song not uploaded"
      );
    }
      history.push(`/musicians/${musicianId}`)
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
    <div className="song-form-container">
      <h1 id='add-song-text'>Add a song to your musician</h1>
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <label id="title" >
            Title:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label className="form-input">
            Song
          </label>
          <input
            // style={{ color: "white" }}
            name="file_url"
            accept="audio/*"
            type="file"
            onChange={uploadTrack}
          />
          {/* <label className="form-input">
            Song Picture
          </label>
          <input
            // style={{ color: "white" }}
            name="song_img"
            accept="image/*"
            type="file"
            onChange={(e) => setSongImg(e.target.files[1])}
          /> */}
          <div id="upload-song">
            <button type="submit" id="create-song-btn">
              Upload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UploadSong;
