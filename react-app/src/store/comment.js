const GET_COMMENTS = 'comments/GET_COMMENTS';
const ADD_COMMENT = 'comments/ADD_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const EDIT_COMMENT = 'comment/EDIT_COMMENT';


const getComments = (comment) => ({
    type: GET_COMMENTS,
    payload: comment,
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
