import React, { useState, useEffect } from "react";
import { useDispatch, useDispatch } from "react-redux";
import { getAllComments, deleteAComment } from "../../store/comment";

const CommentDelete = ({ comment }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  let song_id = comment.id;

  const commentDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteAComment(song_id));
  };

  useEffect(() => {
    dispatch(getAllComments(id));
  }, [dispatch, id]);

  return (
    <div>
      <button id="delete-comment" type="submit" onChange={commentDelete}>
        Delete Comment
      </button>
    </div>
  );
};
export default CommentDelete;
