// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { getAllMusicians, postNewMusician } from "../store/musician";

// const MusicianFormRefactor = () => {

//   const history = useHistory();
//   const dispatch = useDispatch();

//   const user = useSelector((state) => state.session.user);

//   // const [musicians, setMusicians] = useState([]);
//   const [musician_name, setMusicianName] = useState("");
//   const [profile_img, setProfileImg] = useState(null);
//   const [biography, setBiography] = useState("");



//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("musician_name", musician_name);
//     formData.append("profile_img", profile_img);
//     formData.append("biography", biography);
//     formData.append("user_id", user.id);

//     console.log('formdata------=========-----', formData)
//     dispatch(postNewMusician(formData));
//     dispatch(getAllMusicians());
//     history.push(`/users/${user.id}`);
//   };

//   const updateProfileImg = (e) => {
//     let file = e.target.files[0];
//     setProfileImg(file);
//   };

//   return (
//     <div className="outer_card">
//       <h1>Add A Musician</h1>
//       <form onSubmit={onSubmit}>
//         <div className="input_container">
//           <label htmlFor="musician_name">Musician Name</label>
//           <input
//             type="text"
//             name="musician_name"
//             placeholder="Musician Name"
//             onChange={(e) => setMusicianName(e.target.value)}
//             value={musician_name}
//           />
//           <label>Profile Picture</label>
//           <input
//             type="file"
//             accept="image/*"
//             name="profile_img"
//             value={profile_img}
//             onChange={updateProfileImg}
//           />
//           <label htmlFor="biography">Biography</label>
//           <textarea
//             name="biography"
//             type="text"
//             placeholder="biography"
//             onChange={(e) => setBiography(e.target.value)}
//             value={biography}
//           />
//           <button className="submit" type="submit" id="create_musician">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MusicianFormRefactor;
