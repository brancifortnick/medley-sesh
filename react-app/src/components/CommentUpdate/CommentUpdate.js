import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { updateAComment, getAllComments } from "../../store/comment";
// import { getOneMusician } from "../../store/musician";
// import { getMusiciansTracks } from "../../store/song";

const UpdateComment = ({commentId}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [comment, setComment] = useState("");
  const [showModal, setModal] = useState(false);

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("comment", comment);
    dispatch(updateAComment(formData, commentId));
    setModal(false);
    setComment("")
  };


  return (
    <>
      <div id="edit-comment">
        <button id="comment-edit" onClick={() => setModal(true)}>
          Edit your comment
        </button>
      </div>

      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form onSubmit={onSubmit}>
            <label id="comment-label">
              Comment Label
              <textarea
                name="comment"
                placeholder={comment}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </label>
            <button type="submit" id="update-comment-submit">
              Submit your new comment
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
export default UpdateComment;
