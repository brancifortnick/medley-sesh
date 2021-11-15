import React, { useState, useEffect } from "react";
import { useDispatch, useDispatch } from "react-redux";
import { getAllComments, deleteAComment } from "../../store/comment";
import { useHistory } from "react-router-dom";
const CommentDelete = ({ comment }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const history = useHistory();

  const commentDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteAComment(comment));
    history.push(`/musicians/${id}`)
  };

  useEffect(() => {
    dispatch(getAllComments(id));
  }, [dispatch]);

  return (
    <div>
      <button id="delete-comment" type="submit" onChange={commentDelete}>
        Delete Comment
      </button>
    </div>
  );
};
export default CommentDelete;
