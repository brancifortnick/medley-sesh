import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { getAllMusicians, postNewMusician } from "../store/musician";

const MusicianForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  // const [musicians, setMusicians] = useState([]);
  const [musician_name, setMusicianName] = useState("");
  const [profile_img, setProfileImg] = useState("");
  const [biography, setBiography] = useState("");

  useEffect(() => {
    dispatch(getAllMusicians());
  }, [dispatch]);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", user.id);
    formData.append("musician_name", musician_name);
    formData.append("profile_img", profile_img);
    formData.append("biography", biography);
    dispatch(postNewMusician(formData));
    dispatch(getAllMusicians());
    history.push(`/users/${user.id}`);
  };
  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="musician_name">Musician Name</label>
        <input
          placeholder="Musician Name"
          name="musician_name"
          type="text"
          value={musician_name}
          onChange={(e) => setMusicianName(e.target.value)}
        />
        <label htmlFor="biography">Biography</label>
        <textarea
          name="biography"
          type="text"
          placeholder="biography"
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />
        <label htmlFor="Profile_img">Musician Portrait</label>
        <input
          type="file"
          accept="image/*"
          placeholder="Profile Picture"
          name="profile_img"
          value={profile_img}
          onChange={(e) => setProfileImg(e.target.value)}
        />
        <button type="submit">Upload Musician</button>
      </div>
    </form>
  );
};

export default MusicianForm;
