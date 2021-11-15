import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment, getAllComments } from "../../store/comment";
import { Modal } from "../../context/Modal";

const CommentCreate = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const songs = useSelector((state) => Object.values(state.song));

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

    dispatch(createComment(formData));
    setModal(false);
    setComment("");
  };

  // useEffect(() => {
  //   dispatch(getAllComments());
  // }, [dispatch]);

  const updateComment = (e) => setComment(e.target.value);

  return (
    <div>
      <button onClick={() => setModal(true)}>Click here to comment</button>
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
            <button className="comment_submit" type="submit">
              Submit Comment
            </button>
          </form>
        </Modal>
      )}

    </div>
  );
};
export default CommentCreate;
