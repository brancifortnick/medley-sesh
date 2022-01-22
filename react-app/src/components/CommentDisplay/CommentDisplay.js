// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getSongsComments } from "../../store/comment";
// import CommentCreate from "../CommentCreate/CommentCreate";
// import CommentDelete from "../CommentDelete/CommentDelete";
// import CommentUpdate from "../CommentUpdate/CommentUpdate";
// import "./CommentDisplay.css";

// const CommentDisplay = ({ songId }) => {
//   const dispatch = useDispatch();
//   const comments = useSelector((state) => Object.values(state.comment));
//   const currentUser = useSelector((state) => state.session.user);
//   // const song = useSelector((state) => state.song);
//   console.log(comments, "<<<<comments before useEffect", songId, "songId>>>>");

//   useEffect(() => {
//     console.log("inside of useEffect comment display component");
//     dispatch(getSongsComments(songId));
//   }, [dispatch, songId]);

//   return (
//     <div>
//       <CommentCreate songId={songId}/>
//       <div className="comment-form-container">
//         <div id="comment-div">
//           {comments.map((comment) => (
//             <div type="text" className="comment_body" key={comment?.id}>
//               <div className="comment-create"></div>

//               <p className="comment-text-p" type="text">
//                 {`- ${comment?.comment}`}
//               </p>
//               <div className="username">
//                 <p id="username-p">{`comment by - ${comment?.username}`}</p>
//               </div>
//               <div className="content-delete">
//                 {currentUser.id === comment.user_id ? (
//                   <CommentUpdate
//                     songId={comment.song_id}
//                     commentId={comment.id}
//                   />
//                 ) : null}
//               </div>
//               <div>
//                 {currentUser.id === comment.user_id ? (
//                   <CommentDelete
//                     songId={comment.song_id}
//                     commentId={comment.id}
//                   />
//                 ) : null}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommentDisplay;
