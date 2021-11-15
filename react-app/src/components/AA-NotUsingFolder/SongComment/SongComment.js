// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllComments } from "../../store/comment";
// import CommentDelete from "../CommentDelete/CommentDelete";

// const SongComments = () => {
//   const dispatch = useDispatch();
//   const { songId } = useParams();

//   const comments = useSelector((state) => Object.values(state.comment));
//   const user = useSelector((state) => state.session.user);
//   const songs = useSelector(state => state.song)


//   // comments.song_id = songId;
//   // useEffect(() => {
//   //   dispatch(getAllComments(parseInt(songId)));
//   // }, [dispatch, songId]);

//   return (
//     <div>
//       <div>
//         <label htmlFor="comments"></label>
//         {comments.map((comment) => (
//           <div id="comment-body">
//             {comment?.comment}
//             <label htmlFor="comment-username">Comment</label>
//             <Link name="comment">{comment?.username}</Link>
//             {comment?.user_id === user.id ? (
//               <CommentDelete comment={comment} />
//             ) : null}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default SongComments;
