import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Musician() {
  const user = useSelector(state=> state.session.user)
  const [musician, setMusician] = useState({});
  const { musicianId} = useParams();
  user.id = musician.user_id

  useEffect(() => {
    if (!musicianId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/musicians/${musicianId}`);
      const musician = await response.json();
      setMusician(musician);
    })();
  }, [musicianId]);

  if (!musician) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id </strong> {musician.user_id}
      </li>
      <li>
        <strong>Musician Id</strong> {musicianId}
      </li>
      <li>
        <strong>Musician Name</strong> {musician.musician_name}
      </li>
      <li>
        <strong>Profile Image</strong> {musician.profile_img}
      </li>
      <li>
        <strong>Biography</strong> {musician.biography}
      </li>
    </ul>
  );
}
export default Musician;
