import React, { useEffect } from "react";
import {useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteTrack from "../DeleteTrack/DeleteTrack";
import CommentDisplay from "../CommentDisplay/CommentDisplay";
import './AllSongs.css'
import { getOneMusician } from "../../store/musician";


const AllSongs = ({ musicianId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const songs = useSelector((state) =>  Object.values(state.song));
  const comments = useSelector(state => Object.values(state.comment));


  let commentId = comments.map((comment)=> {
    return songs.id === comment.song_id
  })


  useEffect(() => {
    dispatch(getOneMusician(parseInt(musicianId)));
    //should this be parseInt =<><> not sure <><>=
  }, [dispatch, musicianId]);

  return (
    <div>
      <>
        {songs.map((song) => (
          <ul key={song.id} className="song-id">
            <strong>Title: </strong>
            <strong>{song.title}</strong>
            <audio src={song.file_url} controls></audio>
            {user.id === Number(song.musician_id) ? (
              <DeleteTrack musicianId={musicianId} songId={song.id} />
            ) : null}
            {/* {user.id === Number(song.musician_id) ? (
              <CommentCreate musicianId={musicianId} songId={song.id} />
            ) : null} */}
            {user.id === Number(song.musician_id) ? (
               <CommentDisplay commentId={commentId} musicianId={musicianId} songId={song.id} />
            ) : null}
            {/* {user.id === Number(song.musician_id) ? (
              <CommentUpdate commentId={commentId} musicianId={musicianId} songId={song.id} />
            ): null} */}
          </ul>
        ))}
      </>
    </div>
  );
};
export default AllSongs;
