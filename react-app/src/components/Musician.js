// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams, useHistory } from "react-router-dom";
// import { deleteOneMusician } from "../store/musician";

// function Musician() {
//   const currentUser = useSelector(state=> state.session.user)
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [musician, setMusician] = useState({});
//   const { musicianId} = useParams();

//   let num = musicianId

//   const deleteMusician = () => {
//     console.log(num)
//     dispatch(deleteOneMusician(num))
//     history.push(`/musicians`)
//   }


//   useEffect(() => {
//     if (!musicianId) {
//       return;
//     }
//     (async () => {
//       const response = await fetch(`/api/musicians/${musicianId}`);
//       const musician = await response.json();
//       setMusician(musician);
//     })();
//   }, [musicianId]);

//   if (!musician) {
//     return null;
//   }

//   return (
//     <ul>
//       <li>
//         <strong>Musician Id</strong> {musicianId}
//       </li>
//       <li>
//         <strong>Musician Name</strong> {musician.musician_name}
//       </li>
//       <li>
//         <strong>Profile Image</strong> {musician.profile_img}
//       </li>
//       <li>
//         <strong>Biography</strong> {musician.biography}
//       </li>
//       <li>
//         <strong>Songs</strong> {musician.songs}
//       </li>
//       <button className='delete-btn' onClick={deleteMusician}>Delete</button>
//     </ul>
//   );
// }
// export default Musician;
