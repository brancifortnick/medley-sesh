import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../../store/comment";
import CommentDelete from "../CommentDelete/CommentDelete";

const CommentDisplay = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const comments = useSelector((state) => Object.values(state.comment));
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllComments(Number(id)));
  }, [dispatch]);

  return (
    <div id="comment-div">
      {comments?.map((comment) => (
        <div key={comment.id}>
          {comment.comment}
          <a className="user-comment" href={`/users/${comment.user_id}`}>
            {comment?.username}
          </a>
          <div className="content">
            {comment?.user_id === user.id ? (
              <CommentDelete comment={comment.id} />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentDisplay;
