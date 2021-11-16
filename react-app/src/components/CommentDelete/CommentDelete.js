// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector} from "react-redux";
// import { getAllComments, deleteAComment } from "../../store/comment";
// import { useHistory, useParams} from "react-router-dom";
// const CommentDelete = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const comments = useSelector(state => state.comment);
//   let commentId = id;
//   const history = useHistory();

//   const commentDelete = async (e) => {
//     e.preventDefault();
//     await dispatch(deleteAComment(commentId));
//     history.push(`/musicians`)
//   };

//   useEffect(() => {
//     dispatch(getAllComments());
//   }, [dispatch]);

//   return (
//     <div>
//       <button id="delete-comment" type="submit" onClick={commentDelete}>
//         Delete Comment
//       </button>
//     </div>
//   );
// };
// export default CommentDelete;
