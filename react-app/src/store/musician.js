const GET_MUSICIANS = "musician/GET_MUSICIANS";
// const GET_ONE = "musician/GET_ONE";
const ADD_MUSICIAN = "musician/ADD_MUSICIAN";
const DELETE_MUSICIAN = "musician/DELETE_MUSICIAN";
const ADD_IMAGE = 'musician/ADD_IMAGE';


const getAllArtists = (musicians) => ({
  type: GET_MUSICIANS,
  payload: musicians,
});

// const getOne = (musician) => ({
//   type: GET_ONE,
//   payload: musician,
// });

const addMusician = (musician) => ({
  type: ADD_MUSICIAN,
  musician,
});

const deleteMusician = (musician) => ({
  type: DELETE_MUSICIAN,
  musician,
});

const addImage = (musician) => ({
  type: ADD_IMAGE,
  musician,
})

export const getAllMusicians = () => async (dispatch) => {
  const res = await fetch(`/api/musicians/`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getAllArtists(data));
    return data;
  }
};
// export const getOneMusician = (id) => async (dispatch) => {
//   const res = await fetch(`/api/musicians/${id}`);
//   if (res.ok) {
//     const data = await res.json();
//     dispatch(getOne(data));
//     return data;
//   }
// };

export const postNewMusician = (musician) => async (dispatch) => {
  const { user_id, musician_name, profile_img, biography } = musician;
  const res = await fetch(`/api/musicians/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id,
      musician_name,
      profile_img,
      biography,
    }),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addMusician(data));
  }
};

export const uploadImageTos3 = (formData) => async (dispatch) => {
  const data = await fetch(`/api/musicians/upload`, {
   method: 'POST',
   body: formData,
  })
  if(data.ok){
    dispatch(addImage(data))
  }
};





export const deleteOneMusician = (musicianId) => async (dispatch) => {
  const res = await fetch(`/api/musicians/${musicianId}`, {
    method: "DELETE",
  });
  console.log(`musicianid`, musicianId);
  if (res.ok) {
    dispatch(deleteMusician(musicianId));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_MUSICIANS: {
      action.payload.musicians.forEach((musician) => {
        newState[musician.id] = musician;
      });
      return newState;
    }
    case ADD_MUSICIAN:
      newState = Object.assign({}, state);
      newState[action.musician.id] = action.musician;
      return newState;
    case DELETE_MUSICIAN:
      const oldState = { ...state };
      delete oldState[action.musician];
      return oldState;

    default:
      return state;
  }
}
