import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewSong } from "../../store/song";
import { getMusiciansTracks } from "../../store/song";
import { Modal } from "../../context/Modal";
import "./UploadSong.css";

const UploadSong = ({ musicianId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [showModal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [file_url, setSong] = useState(null);
  const [song_img, setSongImg] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file_url", file_url);
    setModal(false);
    const res = await fetch("/api/songs/new-song", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      let file_url = await res.json();
      dispatch(createNewSong(title, file_url, song_img, Number(musicianId)));
    }
    history.push(`/musicians/${musicianId}`);
  };

  const uploadTrack = async (e) => {
    const file = e.target.files[0];
    setSong(file);
  };

  useEffect(() => {
    dispatch(getMusiciansTracks(parseInt(musicianId)));
  }, [dispatch, musicianId]);

  return (
    <div className="song-form-container">
      <button
        id="add-song-text"
        onClick={() => setModal(true)}
      >
        Add a song
      </button>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <h2>Add New Track</h2>
          <form onSubmit={onSubmit}>
            <div className="form-container">
              <label id="title">
                Title:
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </label>
              <label className="form-input">
                Song
                <input
                  name="file_url"
                  accept="audio/*"
                  type="file"
                  onChange={uploadTrack}
                />
              </label>
              <div id="upload-song">
                <button type="submit" id="create-song-btn">
                  Upload
                </button>
              </div>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
export default UploadSong;
