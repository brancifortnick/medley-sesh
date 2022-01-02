const GET_MUSICIANS = "musician/GET_MUSICIANS";
const GET_ONE = "musician/GET_ONE";
const ADD_MUSICIAN = "musician/ADD_MUSICIAN";
const DELETE_MUSICIAN = "musician/DELETE_MUSICIAN";
const UPDATE_BIOGRAPHY = "musician/UPDATE_BIOGRAPHY";
// const ADD_IMAGE = "musician/ADD_IMAGE"; -- put route for image updating

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
});

const deleteMusician = (musician) => ({
  type: DELETE_MUSICIAN,
  payload: musician,
});

const updateBio = (musician) => ({
  type: UPDATE_BIOGRAPHY,
  payload: musician,
});

// const addImage = (musician) => ({
//   type: ADD_IMAGE,
//   payload: musician,
// });
//---put route

export const getAllMusicians = (id) => async (dispatch) => {
  const res = await fetch(`/api/musicians/`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getAllArtists(data.musicians));
    // return data;
  }
};

export const postNewMusician =
  (profile_img, biography, user_id, musician_name) => async (dispatch) => {
    profile_img = profile_img.url;
    const res = await fetch("/api/musicians/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ profile_img, biography, user_id, musician_name }),
    });
    if (res.ok) {
      const musician = await res.json();
      dispatch(addMusician(musician));
    } else {
      console.log("Musician Not Added - Error");
    }
  };

export const getOneMusician = (id) => async (dispatch) => {
  const res = await fetch(`/api/musicians/${id}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getOne(data));
  } //
};

export const deleteOneMusician = (id) => async (dispatch) => {
  const res = await fetch(`/api/musicians/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteMusician(id));
  } else {
    console.log("Musician Can't be deleted");
  }
};

export const updateBiography = (formData, musicianId) => async (dispatch) => {
  const response = await fetch(`/api/musicians/${musicianId}/biography`, {
    method: "PUT",
    body: formData,
  });
  if (response.ok) {
    const biography = await response.json();
    dispatch(updateBio(biography));
  }
};

// export const uploadImageToS = (profile_img, musicianId) => async (dispatch) => {
//   // profile_img = profile_img.url
//   const response = await fetch(`/api/musicians/${musicianId}/image`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ profile_img, musicianId }),
//   });
//   if (response.ok) {
//     const picture = await response.json();
//     dispatch(addImage(picture));
//   } else {
//     console.log("Image can't be added");
//   }
// };
//---put route semi functioning

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MUSICIANS:
      let newState = {};
      action.payload.forEach((musician) => {
        newState[musician.id] = musician;
      });
      return newState;
    case ADD_MUSICIAN:
      const addState = { ...state };
      addState[action.payload.id] = action.payload;
      return addState;
    // return { ...action.payload };
    case GET_ONE:
      return { ...action.payload };
    case DELETE_MUSICIAN:
      const currentState = { ...state };
      delete currentState[action.payload.id];
      return currentState;
    case UPDATE_BIOGRAPHY:
      return { ...action.payload };
    default:
      return state;
  }
}
