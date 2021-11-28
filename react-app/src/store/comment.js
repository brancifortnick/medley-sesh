const GET_COMMENTS = "comment/GET_COMMENTS";
const ADD_COMMENT = "comment/ADD_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";
const EDIT_COMMENT = "comment/EDIT_COMMENT";

const getComments = (comment) => ({
  type: GET_COMMENTS,
  payload: comment,
});

const postComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

const editComment = (comment) => ({
  type: EDIT_COMMENT,
  payload: comment,
});

const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  payload: comment,
});




export const getAllComments = (song_id) => async (dispatch) => {
  const response = await fetch(`/api/comments/${song_id}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getComments(data.comments));
  }else{
    console.log("Can't fetch comments")
  }
};

export const createComment = (formData) => async (dispatch) => {

  const res = await fetch(`/api/comments/new`, {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    console.log('hey before newcomment---redux')
    const newComment = await res.json();
    console.log(newComment, 'we are in the redux store after newComment')
    dispatch(postComment(newComment));
    console.log(newComment, ' after calling postComment')
    return newComment;
  } else {
    console.log("Error-coming from post thunk STORE*******");
  }
};



export const deleteAComment = (id) => async (dispatch) => {
  const res = await fetch(`/api/comments/delete/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteComment(id));
  } else {
    console.log("Musician Can't be deleted");
  }
};

export const updateAComment = (formData, commentId) => async (dispatch) => {
  const res = await fetch(`/api/comments/update/${commentId}`, {
    method: "PUT",
    body: formData,
  });
  if (res.ok) {
    const updatedComment = await res.json();
    dispatch(editComment(updatedComment));
  } else {
    console.log("Musician Can't be edited");
  }
};


const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_COMMENTS:
      action.payload.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case ADD_COMMENT:
      console.log(state, 'inside of reducer')
      state[action.payload.id] = action.payload;
      console.log(state, 'after add_comment>>>>> redux store reducer')
      return state;
    case DELETE_COMMENT:
      const deleteState = {...state}
      delete deleteState[action.payload.id];
      return deleteState;
    case EDIT_COMMENT:
      const updateState = {...state}
      updateState[action.payload] = action.payload;
      return updateState;
    default:
      return state;
  }
};
