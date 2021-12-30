import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment, getAllComments } from "../../store/comment";
import { Modal } from "../../context/Modal";
import './CommentCreate.css'


const CommentCreate = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const songs = useSelector((state) => Object.values(state.song));
  const comments = useSelector(state => Object.values(state.comment));


  const [comment, setComment] = useState("");
  const [showModal, setModal] = useState(false);

  let song_id = songs.map((song) => {
    return song.id
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("song_id", song_id);
    formData.append("user_id", user.id);
    console.log('before comment created', comments )
    dispatch(createComment(formData));
    console.log('after dispatch', comments, '<<<<<<<<')
    setModal(false);
    setComment("");
  };

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  const updateComment = (e) => setComment(e.target.value);

  return (
    <div>
      <div id='comment-modal'>
      <button className='comment-button' onClick={() => setModal(true)}>Click here to comment</button>
      </div>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form className="comment-container" onSubmit={onSubmit}>
            <textarea
              className="comment-input"
              type="text"
              placeholder="Comment here..."
              onChange={updateComment}
              value={comment}
            />

            <div id='comment-create'>
            <button className="comment_submit" type="submit">
              Submit Comment
            </button>
            </div>
          </form>
        </Modal>
      )}
      </div>
  );
};
export default CommentCreate;
