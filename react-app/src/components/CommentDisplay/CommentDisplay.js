import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../../store/comment";
import CommentDelete from "../CommentDelete/CommentDelete";

const CommentDisplay = ({songId}) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => Object.values(state.comment));
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllComments(songId));
  }, [dispatch]);

  return (
    <div>
      <form className="form-container">
        <div id="comment-div">
            {console.log("########################", comments)}
          {comments.map((comment) => (

            <div type="text" className="comment_body" key={comment?.id}>
              <div className="comment-text-div" type="text">
                {comment?.comment}
              </div>
              <div className="user-comment"><strong>{comment?.username}</strong></div>
              <div className="content">
                {/* {comment?.user_id === user.id ? (
                  <CommentDelete commentId={comment.id} />
                ) : null} */}
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default CommentDisplay;
