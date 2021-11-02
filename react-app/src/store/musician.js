const GET_MUSICIANS = "musician/GET_MUSICIANS";
const GET_ONE = "musician/GET_ONE";
const ADD_MUSICIAN = 'musician/ADD_MUSICIAN';



const getAllArtists = (musicians) => ({
  type: GET_MUSICIANS,
  musicians,
});

const getOne = (musician) => ({
  type: GET_ONE,
  musician,
});

const addMusician = (musician) => ({
  type: ADD_MUSICIAN,
  musician,
})

export const getAllMusicians = () => async (dispatch) => {
  const res = await fetch(`/api/musicians`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getAllArtists(data));
    return data;
  }
};
export const getOneMusician = (id) => async (dispatch) => {
  const res = await fetch(`/api/musicians/${id}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getOne(data));
    return data;
  }
};





const initialState = {};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSICIANS: {
      const newState = {};
      action.musicians.forEach((musician) => {
        newState[musician.id] = musician;
      });
      return newState;
    }
    case GET_ONE:
      return {
        ...action.payload
    }
    case ADD_MUSICIAN: {
      const currentState = {}
      currentState[action.musician.id] = action.musician;
      return currentState;
    }
    default:
      return state;
  }
}
