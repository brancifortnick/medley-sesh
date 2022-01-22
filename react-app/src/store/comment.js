// const GET_COMMENTS = "comment/GET_COMMENTS";
// const GET_SONG_COMMENTS = 'comments/GET_SONG_COMMENTS';
// const ADD_COMMENT = "comment/ADD_COMMENT";
// const GET_ONE_COMMENT = "comment/GET_ONE_COMMENT";
// const DELETE_COMMENT = "comment/DELETE_COMMENT";
// const EDIT_COMMENT = "comment/EDIT_COMMENT";

// const getComments = (comments) => ({
//   type: GET_COMMENTS,
//   payload: comments,
// });


// const getSongComments = (comments) => ({
//   type: GET_COMMENTS,
//   payload: comments,
// });

// const getOne = (comment) => ({
//   type: GET_ONE_COMMENT,
//   payload: comment,
// });

// const postComment = (comment) => ({
//   type: ADD_COMMENT,
//   payload: comment,
// });

// const editComment = (comment) => ({
//   type: EDIT_COMMENT,
//   payload: comment,
// });

// const deleteComment = (comment) => ({
//   type: DELETE_COMMENT,
//   payload: comment,
// });

// export const getAllComments = () => async (dispatch) => {
//   const response = await fetch(`/api/comments/`);
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(getComments(data.comments));
//   }
// };

// export const getSongsComments = (song_id) => async (dispatch) => {
//   const res = await fetch(`/api/songs/${song_id}/comments`)
//   if(res.ok){
//     const comments = await res.json();
//     dispatch(getSongComments(comments));
//   }
// }

// export const createComment = (formData) => async (dispatch) => {
//   const res = await fetch(`/api/comments/new`, {
//     method: "POST",
//     body: formData,
//   });
//   if (res.ok) {
//     console.log("hey before newcomment---redux");
//     const newComment = await res.json();
//     console.log(newComment, "we are in the redux store after newComment");
//     dispatch(postComment(newComment));
//     console.log(newComment, " after calling postComment");
//     return newComment;
//   } else {
//     console.log("Error-coming from post thunk STORE*******");
//   }
// };

// export const getOneComment = (id) => async (dispatch) => {
//   const response = await fetch(`/api/comments/${id}`);
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(getOne(data));
//   } else {
//     console.log("Can't fetch comments");
//   }
// };

// export const deleteAComment = (id) => async (dispatch) => {
//   const res = await fetch(`/api/comments/delete/${id}`, {
//     method: "DELETE",
//   });
//   if (res.ok) {
//     dispatch(deleteComment(id));
//   } else {
//     console.log("Musician Can't be deleted");
//   }
// };

// export const updateAComment = (formData, commentId) => async (dispatch) => {
//   const res = await fetch(`/api/comments/update/${commentId}`, {
//     method: "PUT",
//     body: formData,
//   });
//   if (res.ok) {
//     const updatedComment = await res.json();
//     dispatch(editComment(updatedComment));
//   } else {
//     console.log("Musician Can't be edited");
//   }
// };

// const initialState = {};

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_SONG_COMMENTS:
//       let newComState = {};
//       action.payload.forEach((comment) => {
//         newComState[comment.id] = comment;
//       });
//       return newComState;
//     case ADD_COMMENT:
//       const curr = { ...state };
//       console.log(state, "inside of reducer");
//       curr[action.payload.id] = action.payload;
//       console.log(state, "after add_comment>>>>> redux store reducer");
//       return curr;
//     case GET_ONE_COMMENT:
//       return { ...action.payload };
//     case DELETE_COMMENT:
//       const deleteState = { ...state };
//       delete deleteState[action.payload];
//       return deleteState;
//     case EDIT_COMMENT:
//       const editState = {...state}
//       editState[action.payload.id] = action.payload
//       return editState;
//     default:
//       return state;
//   }
// }
