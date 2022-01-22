import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteTrack from "../DeleteTrack/DeleteTrack";
import "./AllSongs.css";
import { getMusiciansTracks } from "../../store/song";
import "./AllSongs.css";
// import { getOneMusician } from "../../store/musician";
// import { getSongsComments } from "../../store/comment";
// import CommentDisplay from "../CommentDisplay/CommentDisplay";
// import { useHistory } from "react-router-dom";


const AllSongs = ({ musicianId }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const songs = useSelector((state) => Object.values(state.song));
  const musicians = useSelector((state) => Object.values(state.musician));

  // const comment = useSelector((state) => state.comment);
  // console.log(comment, "<<<<comment");
  // const musician = useSelector((state) =>state.musician);
  // let commentId = comments.map((comment) => {
  //   return comment.id;
  // });

  useEffect(() => {
    dispatch(getMusiciansTracks(musicianId));
  }, [dispatch, musicianId]);

  return (
    <div>
        {songs.map((song) => (
          <div key={song.id} className="song-id">
            <p className="title-p">Title: {song.title} </p>
            <div id="audio-player">
              <audio src={song.file_url} controls></audio>
              {user.id === Number(musicians.user_id) ? (
                <DeleteTrack musicianId={musicianId} songId={song.id} />
              ) : null}
            </div>
          </div>
        ))}
    </div>
  );
};
export default AllSongs;
