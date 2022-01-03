// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, TypedUseSelectorHook} from "react-redux";
// import AllComments from "../AllComments";
// import { getOneSingleSong } from "../../store/song";
// import CommentCreate from "../CommentCreate/CommentCreate";
// import { getOneUser } from "../../store/users";
// import CommentDisplay from "../CommentDisplay/CommentDisplay";


// const SingleSong = () => {

//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const song = useSelector((state) => state.song);


//   useEffect(() => {
//     dispatch(getOneSingleSong(Number(id)));
//   }, [dispatch, id]);

//   return (
//     <div className="audio_outer_div">
//       <div id="single-song">
//         <h2 className="song-title">{song?.title}</h2>
//       </div>
//       <div className="create_comment">
//         <CommentCreate songId={song.id}/>
//       </div>
//       <div className="comment_component_container">
//         <CommentDisplay songId={song.id} />
//       </div>
//     </div>
//   );
// };
// export default SingleSong;
