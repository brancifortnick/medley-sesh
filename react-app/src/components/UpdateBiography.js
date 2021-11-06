import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBiography, getOneMusician } from "../store/musician";

const UpdateBiography = ({ musicianBiography, musicianId }) => {
  const dispatch = useDispatch();

  const [biography, setBiography] = useState("");

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("biography", biography);
    await dispatch(updateBiography(formData, musicianId));
  };

  useEffect(() => {
    dispatch(getOneMusician(parseInt(musicianId)));
  }, [dispatch, musicianId]);

  return (
    <div>
      <button>Edit no functionality yet</button>
      {biography ? (
        <form onSubmit={onSubmit}>
          <label id="bio-form">
            Artist Biography
            <textarea
              name="biography"
              placeholder={musicianBiography}
              onChange={(e) => setBiography(e.target.value)}
              value={biography}
            />
          </label>
          <button type="submit">Update</button>
        </form>
      ) : null}
    </div>
  );
};
export default UpdateBiography;
