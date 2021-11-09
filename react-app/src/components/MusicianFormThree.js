import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllMusicians, postNewMusician } from "../store/musician";

const MusicianFormThree = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  // const [musicians, setMusicians] = useState([]);
  const [musician_name, setMusicianName] = useState("");
  const [image, setProfileImg] = useState(null);
  const [biography, setBiography] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_img", image.blob);
    const res = await fetch('/api/musicians/new-picture', {
        method :'POST',
        body: formData,
    });
    if(res.ok){
        let profile_img = await res.json()
        const musician = dispatch(postNewMusician(profile_img, biography, user.id, musician_name));
    }else{
        console.log('post form on front end----------ERROR F>E')

    }
    history.push(`/users/${user.id}`);
  };

  const updateProfileImg = (e) => {
    const file = e.target.files[0];
    setProfileImg(file);
  };
//
  return (
    <div className="outer_card">
      <h1>Add A Musician</h1>
      <form onSubmit={onSubmit}>
        <div className="input_container">
          <label htmlFor="musician_name">Musician Name</label>
          <input
            type="text"
            name="musician_name"
            placeholder="Musician Name"
            onChange={(e) => setMusicianName(e.target.value)}
            value={musician_name}
          />
          <label>Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            name="profile_img"
            onChange={updateProfileImg}
          />
          <label htmlFor="biography">Biography</label>
          <textarea
            name="biography"
            type="text"
            placeholder="biography"
            onChange={(e) => setBiography(e.target.value)}
            value={biography}
          />
          <button className="submit" type="submit" id="create_musician">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MusicianFormThree;
