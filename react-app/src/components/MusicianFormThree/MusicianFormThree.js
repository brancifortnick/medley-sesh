import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllMusicians, postNewMusician } from "../../store/musician";
import "./MusicianFormThree.css";

const MusicianFormThree = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [musician_name, setMusicianName] = useState("");
  const [profile_img, setProfileImg] = useState("");
  const [biography, setBiography] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_img", profile_img);
    //fetching from backend route
    const res = await fetch("/api/musicians/new-picture", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      let profile_img = await res.json();
      dispatch(postNewMusician(profile_img, biography, user.id, musician_name));
      dispatch(getAllMusicians());
    }
    history.push(`/users/${user.id}`);
  };

  const updateProfileImg = (e) => {
    const file = e.target.files[0];
    setProfileImg(file);
  };

  return (
    <div className="outer_card">
      <h1 id="add-musician-text">Add A Musician</h1>
      <form className="musician-form" onSubmit={onSubmit}>
        <div className="input_container">
          <label htmlFor="musician_name" style={{ color: "white" }}>
            Musician Name
          </label>
          <input
            type="text"
            name="musician_name"
            placeholder="Musician Name"
            onChange={(e) => setMusicianName(e.target.value)}
            value={musician_name}
          />
        </div>
        <label htmlFor="add-profile-pic" style={{ color: "white" }}>
          Add Profile Picture
        </label>
        <input
          style={{ color: "white", fontSize: "15px", fontWeight: "500" }}
          type="file"
          accept="image/*"
          name="profile_img"
          onChange={updateProfileImg}
        />
        <label htmlFor="biography" style={{ color: "white" }}>
          Biography
        </label>
        <textarea
          name="biography"
          type="text"
          placeholder="biography..."
          onChange={(e) => setBiography(e.target.value)}
          value={biography}
        />
        <button className="submit" type="submit" id="create_musician">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MusicianFormThree;
