import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllMusicians } from "../store/musician";


const ImageUpload = () => {
  const history = useHistory();
  const [profileImage, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const musicians = useSelector(state=> Object.values(state.musician))

  profileImage = musicians.profile_img;
  console.log(musicians.profile_img)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_img", profile_img);
    setImageLoading(true);

    const res = await fetch("/api/musicians", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      await res.json();
      setImageLoading(false);
      history.push("/musicians");
    } else {
      setImageLoading(false);
      console.log("error in loading phase");
    }
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={updateImage} />
      <button type="submit">Submit</button>
      {imageLoading && <p>Loading...</p>}
    </form>
  );
};

export default ImageUpload;
