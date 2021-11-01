const GET_MUSICIANS = 'musician/GET_MUSICIANS';

const getAllArtists = (musicians) => ({
    type: GET_MUSICIANS,
    payload: musicians,
})

export const getAllMusicians = () => async (dispatch) => {
    const res = await fetch(`/api/musicians`);
    if(res.ok){
        const data = await res.json();
        dispatch(getAllArtists(data));
    }
};



const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSICIANS:{
      const newState = {}
      action.payload.forEach((musician)=> {
        newState[action.payload.id] = musician;
      })
    return newState;
  }
    default:
      return state;
  }
}
