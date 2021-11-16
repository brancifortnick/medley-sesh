import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMusiciansTracks } from "../../store/song";
import DeleteTrack from "../DeleteTrack/DeleteTrack";

const AllSongs = ({ musicianId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const songs = useSelector((state) => Object.values(state.song));
//
  useEffect(() => {
    dispatch(getMusiciansTracks(parseInt(musicianId)));
    //should this be parseInt =<><> not sure <><>=
  }, [dispatch, musicianId]);

  return (
    <div>
      <ul>
        {songs.map((song) => (
          <ul key={song.id} className="song-id">
            <strong>Title:{" "}</strong>
            <strong>{song.title}</strong>
            <div></div>
            <audio src={song.file_url} controls></audio>
            {user.id === Number(song.musician_id) ? (
            <DeleteTrack musicianId={musicianId} songId={song.id} />
            ): null}
          </ul>
        ))}
      </ul>
    </div>
  );
};
export default AllSongs;
