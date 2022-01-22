import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTrack, getMusiciansTracks } from "../../store/song";
import { getOneMusician } from "../../store/musician";
import './DeleteTrack.css'


const DeleteTrack = ({ musicianId, songId }) => {
  // const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(deleteTrack(parseInt(songId)));
    // history.push("/");
  };

  useEffect(() => {
    dispatch(getOneMusician(parseInt(musicianId)));
    dispatch(getMusiciansTracks(parseInt(musicianId)));
  }, [dispatch, musicianId]);

  return (
    <div id='deleteSong'>
      <button onClick={onSubmit} id="delete-song-btn">
        Delete Song
      </button>
    </div>
  );
};

export default DeleteTrack;
