import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getAllComments, deleteAComment } from "../../store/comment";
import { useHistory, useParams} from "react-router-dom";
const CommentDelete = () => {
  const dispatch = useDispatch();


  // const {id} = useParams();


  const commentDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteAComment());
  };

  useEffect(() => {
    dispatch(getAllComments(songId));
  }, [dispatch, songId]);

  return (
    <div id='button-delete-div'>
      <button id="delete-comment" type="submit" onClick={commentDelete}>
        Delete Comment
      </button>
    </div>
  );
};
export default CommentDelete;
