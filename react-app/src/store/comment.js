const GET_COMMENTS = "comment/GET_COMMENTS";
const ADD_COMMENT = "comment/ADD_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";
// const EDIT_COMMENT = "comment/EDIT_COMMENT";

const getComments = (comment) => ({
  type: GET_COMMENTS,
  payload: comment,
});

const postComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  payload: comment,
});

// const editComment = (comment) => ({
//   type: EDIT_COMMENT,
//   payload: comment,
// });



export const getAllComments = (song_id) => async (dispatch) => {
  const response = await fetch(`/api/comments/${song_id}`);
  if (response.ok) {
    const comments = await response.json();
    dispatch(getComments(comments));
    return comments;
  }else{
    console.log('FETCH FROM ++++++STORE GET')
  }
};
export const createComment = (formData) => async (dispatch) => {
  const res = await fetch(`/api/comments/new`, {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    const newComment = await res.json();
    dispatch(postComment(newComment));
    return newComment;
  } else {
    console.log("Error-coming from post thunk STORE*******");
  }
};

export const deleteAComment = (id) => async (dispatch) => {
  const res = await fetch(`/api/comments/delete/${id}`, {
    method: "DELETE",
    body: JSON.stringify(id),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(deleteComment(data));
    return data;
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = {...state};
  switch (action.type) {
    case GET_COMMENTS:
      action.payload.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case ADD_COMMENT:
      return { ...action.payload };
    case DELETE_COMMENT:
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
}
