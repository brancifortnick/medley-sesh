const GET_COMMENTS = 'comments/GET_COMMENTS';
const ADD_COMMENT = 'comments/ADD_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const EDIT_COMMENT = 'comment/EDIT_COMMENT';


const getComments = (comments) => ({
    type: GET_COMMENTS,
    payload: comments,
})

const postComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment,
})

const deleteComment = (comment) => ({
    type: DELETE_COMMENT,
    payload: comment,
})

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    payload: comment,
})



export const getAllComments = (song_id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${song_id}`)
    if(response.ok){
        const comments = await response.json();
        dispatch(getComments(comments));
    }
};



export default function reducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_COMMENTS:
      action.payload.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case ADD_COMMENT:
        return {...action.payload}
    default:
        return state
  }
};
