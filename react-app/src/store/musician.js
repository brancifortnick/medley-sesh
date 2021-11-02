
const GET_MUSICIANS = 'musicians/GET_MUSICIANS';

const getAllArtists = (musicians) => ({
    type: GET_MUSICIANS,
    musicians,
})

export const getAllMusicians = () => async (dispatch) => {
    const res = await fetch(`/api/musicians`);
    if(res.ok){
        const data = await res.json();
        dispatch(getAllArtists(data));
        return data;
    }
};



const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSICIANS:{
      const newState = {}
      action.musicians.forEach((musician)=> {
        newState[musician.id] = musician;
      })
    return newState;
  }
    default:
      return state;
  }
}
