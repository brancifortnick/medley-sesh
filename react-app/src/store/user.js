const GET_USER = "user/GET_USER";


const getUser = (user) => ({
    type: GET_USER,
    payload: user,
})



export const getOneUser = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}`);
  if (res.ok) {
    const user = await res.json();
    dispatch(getUser(user));
    return user;
  }
};



const initialState = {};

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_USER:
            return {
                ...action.payload
            }
        default:
            return state;
    }
};
