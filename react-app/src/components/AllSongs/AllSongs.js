import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMusiciansTracks } from "../../store/song";
import DeleteTrack from "../DeleteTrack/DeleteTrack";

const AllSongs = ({ musicianId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const musician = useSelector((state) => Object.values(state.musician));
  const songs = useSelector((state) => Object.values(state.songs));

  useEffect(() => {
    dispatch(getMusiciansTracks(Number(musicianId))); //should this be parseInt =<><> not sure <><>=
  }, [dispatch]);

  return (
    <div>
      <ul>
        {songs.map((song) => (
          <div key={song.id} className="song-id">
            Title: {song.title}
            <p>Listen to your medley</p>
            <button oncClick={song.file_url} id="play-btn">
              Listen
            </button>
            <audio src={song.file_url} controls></audio>
            {user.id === Number(musician.user_id)}
            <DeleteTrack musicianId={musicianId} songId={song.id} />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default AllSongs;
