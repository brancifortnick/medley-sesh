import React, {useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getAllComments, deleteAComment } from "../../store/comment";
import { useHistory} from "react-router-dom";
const CommentDelete = ({commentId}) => {

  const dispatch = useDispatch();

  const history = useHistory();
  const musician = useSelector(state => state.musician);
  const commentDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteAComment(commentId));
    history.push(`/musicians/${musician.id}`)
  };

  // useEffect(() => {
  //   dispatch(getAllComments());
  // }, [dispatch]);

  return (
    <form id='delete-form'>
      <div id="button-delete-div">
        <button id="delete-comment" type="submit" onClick={commentDelete}>
          Delete Comment
        </button>
      </div>
    </form>
  );
};
export default CommentDelete;
