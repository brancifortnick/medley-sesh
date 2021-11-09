const GET_MUSICIANS = "musician/GET_MUSICIANS";
const GET_ONE = "musician/GET_ONE";
const ADD_MUSICIAN = "musician/ADD_MUSICIAN";
const DELETE_MUSICIAN = "musician/DELETE_MUSICIAN";
const ADD_IMAGE = "musician/ADD_IMAGE";
const UPDATE_BIOGRAPHY = "musician/UPDATE_BIOGRAPHY";

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

const addImage = (musician) => ({
  type: ADD_IMAGE,
  payload: musician,
});

const updateBio = (musician) => ({
  type: UPDATE_BIOGRAPHY,
  payload: musician,
});

export const getAllMusicians = (id) => async (dispatch) => {
  const res = await fetch(`/api/musicians/`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getAllArtists(data.musicians));
    console.log(
      data.musicians,
      "store <<<<<<<getALLMusicians DATA>MUSICIANs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    );
  }
};

// export const postNewMusician = (musician) => async (dispatch) => {
//   const { user_id, musician_name, profile_img, biography } = musician;
//   const res = await fetch(`/api/musicians/new`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user_id,
//       musician_name,
//       profile_img,
//       biography,
//     }),
//   });
//   if (res.ok) {
//     const data = await res.json();
//     dispatch(addMusician(data));
//   }
// };/

// export const postNewMusician = (formData) => async (dispatch) => {
//   const response = await fetch(`/api/musicians/new`, {
//     method: "POST",
//     body: formData,
//   });
//   if (response.ok) {
//     const newMusician = await response.json();
//     dispatch(addMusician(newMusician));
//     return newMusician;
//   } else {
//     console.log("error------------------------------------------upload createArtist thunk (fetch call)");
//   }
// };

export const postNewMusician =
  (profile_img, biography, user_id, musician_name) => async (dispatch) => {
    profile_img = profile_img.url;
    console.log(
      profile_img,
      "profile_img>>>>>>STORE postnewMusician thunk<<<<<<<<<"
    );
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
      console.log("erroring in post route>>>>>STORE<<<<<");
    }
  };

export const getOneMusician = (id) => async (dispatch) => {
  const res = await fetch(`/api/musicians/${id}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getOne(data));
  }
};

export const uploadImageToS = (formData, musicianId) => async (dispatch) => {
  const response = await fetch(`/api/musicians/${musicianId}/image`, {
    method: "PUT",
    body: formData,
  });
  if (response.ok) {
    const picture = await response.json();
    dispatch(addImage(picture));
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

export const deleteOneMusician = (id) => async (dispatch) => {
  const res = await fetch(`/api/musicians/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteMusician(id));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_MUSICIANS:
      action.payload.forEach((musician) => {
        newState[musician.id] = musician;
      });
      return newState;
    case ADD_MUSICIAN:
      // newState = Object.assign({}, state);
      // newState[action.musician.id] = action.musician;
      return { ...action.payload };
    case GET_ONE:
      return { ...action.payload };
    case DELETE_MUSICIAN:
      const currentState = { ...state };
      delete currentState[action.musician.id];
      return currentState;
    case ADD_IMAGE:
      newState[action.payload.id] = action.payload;
      return newState;
    case UPDATE_BIOGRAPHY:
      return { ...action.payload };
    default:
      return state;
  }
}
