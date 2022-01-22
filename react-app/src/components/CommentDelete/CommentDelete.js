// import React, {useEffect } from "react";
// import { useDispatch, useSelector} from "react-redux";
// import { getAllComments, deleteAComment } from "../../store/comment";
// import { useHistory} from "react-router-dom";
// import './CommentDelete.css'


// const CommentDelete = ({commentId}) => {

//   const dispatch = useDispatch();

//   const history = useHistory();
//   const musician = useSelector(state => state.musician);
//   const user = useSelector(state => state.session.user);

//   const commentDelete = async (e) => {
//     e.preventDefault();
//     dispatch(deleteAComment(commentId));
//     dispatch(getAllComments())
//   };

//   useEffect(() => {
//     dispatch(getAllComments());
//   }, [dispatch]);

//   return (
//     <form id='delete-form'>

//         <button className="delete-comment" type="submit" onClick={commentDelete}>
//           Delete Comment
//         </button>

//     </form>
//   );
// };
// export default CommentDelete;
