const GET_TRACKS = "song/GET_TRACKS";
const ADD_TRACK = "song/ADD_TRACK";
const UPDATE_TRACK = "song/UPDATE_TRACK";
const DELETE_TRACK = "song/DELETE_TRACK";

const getAllSongs = (songs) => ({
  type: GET_TRACKS,
  payload: songs,
});

const addOneSong = (song) => ({
  type: ADD_TRACK,
  payload: song,
});

const updateTrack = (song) => ({
  type: UPDATE_TRACK,
  payload: song,
});

const deleteATrack = (song) => ({
  type: DELETE_TRACK,
  payload: song,
});

export const getMusiciansTracks = (id) => async (dispatch) => {
  const response = await fetch(`/api/musicians/${id}/songs`);
  if (response.ok) {
    const songData = await response.json();
    dispatch(getAllSongs(songData.songs));
  } else {
    console.log("+++++++____first thunk in SONG STORE___+++++++");
  }
};

export const createNewSong =
  (title, file_url, song_img, musician_id) => async (dispatch) => {
    file_url = file_url.url;
    const res = await fetch("/api/songs/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, file_url, song_img, musician_id }),
    });
    if (res.ok) {
      const newSong = await res.json();
      dispatch(addOneSong(newSong));
    } else {
      console.log(
        "erroring out in musician thunk---> createNewSong---> STORE ***SONG**"
      );
    }
  };

export const deleteTrack = (id) => async (dispatch) => {
  const response = await fetch(`/api/songs/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteATrack(id));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRACKS:
      let newState = {};
      action.payload.forEach((song) => {
        newState[song.id] = song;
      });
      return newState;
    case ADD_TRACK:
      return {...action.payload}
      // newState[action.payload.id] = action.payload;
      // return newState;
    case DELETE_TRACK:
      const currentState = { ...state };
      delete currentState[action.payload.id]; // maybe this should be action.payload.id-not sure
      return currentState;
    default:
      return state;
  }
}
//   case UPDATE_TRACK: {}          //! update track reducer not added yet
