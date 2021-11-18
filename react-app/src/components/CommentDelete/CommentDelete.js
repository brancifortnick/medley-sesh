import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getAllComments, deleteAComment } from "../../store/comment";
import { useHistory, useParams} from "react-router-dom";
const CommentDelete = ({commentId}) => {
  const dispatch = useDispatch();

  const commentDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteAComment(commentId));
  };

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  return (
    <div>
      <button id="delete-comment" type="submit" onClick={commentDelete}>
        Delete Comment
      </button>
    </div>
  );
};
export default CommentDelete;
