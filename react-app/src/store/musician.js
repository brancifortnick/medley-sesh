const GET_MUSICIANS = "musician/GET_MUSICIANS";
const GET_ONE = "musician/GET_ONE";
const ADD_MUSICIAN = 'musician/ADD_MUSICIAN';

const getAllArtists = (musicians) => ({
  type: GET_MUSICIANS,
  payload: musicians,
});

const getOne = (musician) => ({
  type: GET_ONE,
  payload: musician,
});

const addMusician = (musician) => ({
  type: ADD_MUSICIAN,
  payload: musician,
})

export const getAllMusicians = () => async (dispatch) => {
  const res = await fetch(`/api/musicians/`);
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

export const postNewMusician = (formData) => async (dispatch) => {
  const{user_id, musician_name, profile_img, biography} = formData;
  const res = await fetch(`/api/musicians/new/${musician_name}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id,
      musician_name,
      profile_img,
      biography,
    })
  });
   if(res.ok){
    const data = await res.json();
    dispatch(addMusician(data))
  }
};




const initialState = {};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSICIANS: {
      const newState = {};
      action.payload.musicians.forEach((musician) => {
        newState[musician.id] = musician;
      });
      return newState;
    }
    case GET_ONE:
      return {
        ...action.payload
    }
    case ADD_MUSICIAN:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
