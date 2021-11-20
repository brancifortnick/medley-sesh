import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../../store/comment";
import CommentCreate from "../CommentCreate/CommentCreate";
import CommentDelete from "../CommentDelete/CommentDelete";
import CommentUpdate from '../CommentUpdate/CommentUpdate';
import './CommentDisplay.css';


const CommentDisplay = ({songId}) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => Object.values(state.comment));
  const currentUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(getAllComments(songId));
  }, [dispatch, songId]);

  return (
    <div>
      <div className="comment-form-container">
        <div id="comment-div">
          {comments.map((comment) => (
            <div type="text" className="comment_body" key={comment?.id}>
              <div className="username">
                <p id='username-p'>{comment?.username}:</p>
              </div>
              <p className="comment-text-p" type="text">
                {comment?.comment}
              </p>
              <div className='comment-create'>
                <CommentCreate commentId={comment.id} />
                </div>
              <div className="content-delete">
                {currentUser.id === comment.user_id ? (
                  <CommentUpdate commentId={comment.id} />
                ): null}
                </div>
                {currentUser.id === comment.user_id ? (
                <CommentDelete commentId={comment.id} />
                ): null}
                <div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentDisplay;
