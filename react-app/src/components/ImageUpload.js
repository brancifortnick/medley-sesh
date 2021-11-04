import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getOneMusician, uploadImageToS } from "../store/musician";

const ImageUpload = ({ musicianId }) => {

  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  const [profile_img, setProfileImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const updateImage = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_img", profile_img);

    setImageLoading(true);
    dispatch(uploadImageToS(formData, musicianId));
  };

  useEffect(() => {
    dispatch(getOneMusician(parseInt(musicianId)));
    setImageLoading(false);
  }, [dispatch, musicianId]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="file" accept="image/*" onChange={updateImage} />
      </label>
      <button type="submit">Submit</button>
      {imageLoading && <p>Loading...</p>}
    </form>
  );
};

export default ImageUpload;