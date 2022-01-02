import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteTrack from "../DeleteTrack/DeleteTrack";
import CommentDisplay from "../CommentDisplay/CommentDisplay";
import "./AllSongs.css";
import { getOneMusician } from "../../store/musician";
import {getMusiciansTracks} from '../../store/song';

import "./AllSongs.css";

const AllSongs = ({ musicianId }) => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const songs = useSelector((state) => Object.values(state.song));

  const comment = useSelector((state) => (state.comment));
  let commentId = comment.id

  const musician = useSelector((state) =>state.musician);

  // let commentId = comments.map((comment) => {
  //   return comment.id;
  // });

  useEffect(() => {
    dispatch(getOneMusician(parseInt(musicianId)));
  }, [dispatch, musicianId]);

  return (
    <div>
      <>
        {songs.map((song) => (
          <div key={song.id} className="song-id">
            <p className="title-p">Title: {song.title} </p>
            <div id="audio-player">
              <audio src={song.file_url} controls></audio>
              {user.id === Number(song.musician_id) ? (
                <DeleteTrack musicianId={song.musician_id} songId={song.id} />
              ) : null}
            </div>
            <div id="comment-display-component">
              {user.id === Number(song.musician_id) ? (
                <CommentDisplay
                  commentId={comment.id}
                  musicianId={musicianId}
                  songId={song.id}
                />
              ) : null}
            </div>

            {/* {user.id === Number(song.musician_id) ? (
              <CommentUpdate commentId={commentId} musicianId={musicianId} songId={song.id} />
            ): null} */}
          </div>
        ))}
      </>
      {/* ): null} */}
    </div>
  );
};
export default AllSongs;
